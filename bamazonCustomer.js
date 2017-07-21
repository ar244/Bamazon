var mysql = require("mysql");
var inquirer = require("inquirer");
var fixedWidthString = require('fixed-width-string');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log(" ");
    console.log("Welcome to Bamazon!!");
    console.log("What would you like to buy today?")
    console.log(" ");
    for (var i=0; i<res.length; i++) {
    	console.log("ID: " +fixedWidthString(res[i].id, 2) + "   Product: "+fixedWidthString(res[i].product_name, 15) + "        Price: "+res[i].price);
    	
  	}

  runSale();
});
});

function runSale() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Enter product id: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "Enter quantity: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      var query = "SELECT quantity, price FROM products WHERE id=?";
      connection.query(query, [answer.id], function(err, res) {
        for (var i = 0; i < res.length; i++) {
        	if (answer.quantity > res[i].quantity) {
        		console.log ("Sorry...insufficient quantity in stock");
        	} else {
        		var newQuantity = res[i].quantity - answer.quantity;
        		query = "UPDATE products SET quantity=? WHERE id=?;";
        		
        		var cost = answer.quantity * res[i].price;
        		console.log("Total Cost = " + cost);
        		connection.query(query, [newQuantity, answer.id], function(err, res) {
        			
        		});

        	}
          
        }
        runSale();
      });
    });
}