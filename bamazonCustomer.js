//Dependencies:
var inquirer = require('inquirer');
var mysql = require('mysql');

//MySQL Connection:
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: 'Duchess143!',
    database: 'bamazon_db'


});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//Function to display list of all products:
var displayProducts = function () {
    var query = "Select * FROM products";
    connection.query(query, function (err, res) {

        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].item_id + " || Product Name: " +
                res[i].product_name + " || Price: " + res[i].price);
        }
        requestProduct();
    });
};
