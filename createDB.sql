-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect favorite_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INTEGER(10) NOT NULL,
  quantity INTEGER(5) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("book", "Books", 20, 10);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("clock", "Electronics", 50, 8);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("laptop", "Electronics", 500, 10);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Black pen", "Stationary", 2, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Guitar", "Music", 100, 5);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("basketball", "Sports", 10, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("planner", "Stationary", 5, 3);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("chair", "Furniture", 100, 12);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("table", "Furniture", 200, 4);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("backpack", "Travel", 20, 10);





