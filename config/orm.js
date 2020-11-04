// Import MySQL connection
let connection = require("../config/connection.js");
const { insertOne } = require("../models/burger.js");


// create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.
let orm = {
    selectAll: function (tableName, cbModel) {
        connection.query("SELECT * FROM ??", tableName, function (err, results) {
            cbModel(results);
        });
    },
    insertOne: function (tableName, cols, vals, cbModel) {
        connection.query("INSERT INTO ?? (??,??) VALUES (?,?)", [tableName, cols[0], cols[1], vals[0], vals[1]], function (err, results) {
            cbModel(results);
        });
    },
    updateOne: function (tableName, condition, cbModel) {
        connection.query("UPDATE ?? SET devoured = 1 WHERE id = ?", [tableName, condition], function (err, results) {
            if (err) throw err;
            cbModel(results);
        });
    },
}

// Export the orm 
module.exports = orm;
