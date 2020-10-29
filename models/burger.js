// Import the orm
let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
    orm.all("burgers", function(res) {
        cb(res);
    });
},

// create the code that will call the ORM functions using burger specific input for the ORM.



// Export the functions
module.exports = burger;