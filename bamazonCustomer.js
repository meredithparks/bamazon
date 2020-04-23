//Dependencies:
var mysql = require('mysql');
var inquirer = require('inquirer');


//MySQL Connection:
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'Duchess143!',
    database: 'bamazon_db'


});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection successful');
    // display all items from database once mysql connection has been established
    displayProducts();
});


// function to display all items for sale
var displayProducts = function() {
	var query = "Select * FROM products";
	connection.query(query, function(err, res) {

		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].item_id + " || Product Name: " +
						res[i].product_name + " || Price: " + res[i].price);
		}

		// Requests product and number of product items user wishes to purchase.
  		requestProduct();
	});
};

//Function to ask which item the customer wants
var requestProduct = function() {	
    inquirer.prompt([{
    name: "productID",
    type: "input",
    message: "Please enter product ID for product you want.",
    validate: function(value) {
        if (isNaN(value) === false) {
            return true;
        }
        return false;
    }
}, {
    name: "productUnits",
    type: "input",
    message: "How many units do you want?",
    validate: function(value) {
        if (isNaN(value) === false) {
            return true;
        }
        return false
    }
}]).then(function(answer) {

    // Queries database for selected product.
    var query = "Select stock_quantity, price, department_name FROM products WHERE ?";
    connection.query(query, { item_id: answer.availableStock, function(err, res) {
        
        if (err) throw err;

        var available_stock = res[0].stock_quantity;
        var price_per_unit = res[0].price;
        var productDepartment = res[0].department_name;

        // Checks there's enough inventory  to process user's request.
        if (available_stock >= answer.productUnits) {

            // Processes user's request passing in data to complete purchase.
            completePurchase(available_stock, price_per_unit, productDepartment, answer.productID, answer.productUnits);
        } else {

            // Tells user there isn't enough stock left.
            console.log("There isn't enough stock left!");

            // Lets user request a new product.
            requestProduct();
        }
