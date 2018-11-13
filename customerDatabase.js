// DEPENDENCIES
//=======================================================//
var mysql = require("mysql");
var inquirer = require("inquirer");
//=======================================================//

// MYSQL CONNECTION //
//=======================================================//
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password:"Sammyarg1!",
    database:"bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
})
//=======================================================//

//INQUIRER TERMINAL QUESTIONS (Data pulled from MySQL)
//=======================================================//
function start() {
    connection.query("SELECT * FROM product_list", function(err,res){
        if (err) throw err;
        for (var i=0; i < res.length; i++) {
            console.log("Product ID: " + res[i].id + "Product Name: " + res[i].item_name + "Price: $" + res[i].item_price);
        };
        inquirer.prompt([
            {
            name:"whichProduct",
            type: "input",
            message: "What is the ID of the product you would like to buy?"
            },
            {
            name: "howMany",
            type: "input",
            message: "How many units would you like to buy?"
            },
            // {
            // type: "confirm",
            // message: "Are you sure:",
            // name: "confirm",
            // default: true
            // }
        ])
        .then(function (inquirerResponse) {
           for (var i=0; i < res.length; i++) { 
            var totalPrice = inquireResponse.howMany * res[i].item_price
                if (inquireResponse.whichProduct === res[i].id && inquireResponse.howMany < res[i].stock) {
                    console.log(inquirerResponse.howMany + "units of " + res[i].item_name + "will be added to the cart for a total price of $ " + totalPrice);
                    var query = connection.query(
                        "UPDATE product_list SET ? WHERE ?" 
                        [{
                            stock: res[i].stock - inquireResponse.howMany
                         },
                         {
                             id: inquirerResponse.whichProduct
                         }
                        ],
                        function(err){
                            if(err) throw err;
                            console.log("stock has been updated");
                        }
                        );
                        endConnection();
                }
                if (inquireResponse.howMany > res[i].stock) {
                        console.log ("We do not have enough stock to meet your request, please select a lower number.");
                }
                if (res[i].stock === 0) {
                        console.log ("Item is currently unavailable");
                }
                // if(inquirierResponse.confirm === true) {
                //     console.log("You have purchased " + inquirerResponse.howMany + "units of " + res[i].item_name + "for a total of $" + totalPrice);
                // }
                else {
                    console.log("\nPlease edit your order and try again");
                }
            }
        })
    })
}
//=======================================================//
