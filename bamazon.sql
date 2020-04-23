DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;


CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name TEXT NOT NULL,
    department_name TEXT NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales DECIMAL(10, 2),
    PRIMARY KEY (item_id)
    
    );
    
SELECT * FROM products;

    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
('Listerine Mouthwash', 'Beauty and Personal', 5.24, 500),
('Tennis Balls', 'Sports and Fitness',3.99, 100),
('Honeywell Fan', 'Appliances', 14.94, 250),
('Fire TV Stick', 'Amazon Devices', 39.99, 650),
('Catan The Board Game', 'Games', 44.10, 50),
('American Dirt', 'Books', 14.99, 150),
('Baking Sheet', 'Home and Kitchen', 17.56, 200),
('Sandals', 'Clothing', 25.99, 300),
('TV', 'Electronics', 250.00, 100),
('Dog Food', 'Pet Supplies', 30.00, 500);











    

