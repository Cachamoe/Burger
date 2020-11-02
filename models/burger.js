// Import the orm
let orm = require("../config/orm.js");


// Call the ORM functions using burger specific input for the ORM
let burger = {
    selectAll: function (cbController) {
        orm.selectAll("burgers", function (results) {
            cbController(results);
        });
    },
    insertOne: function (cols, vals, cbController) {
        orm.insertOne("burgers", cols, vals, function (results) {
            cbController(results);
        });
    },
    updateOne: function (objColVals, condition, cbController) {
        orm.update("burgers", objColVals, condition, function (results) {
            cbController(results);
        });
    }
};

// Export the functions
module.exports = burger;