// Set up MySQL connection
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "burgers_db"
});

// Make MySQL connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected: " + connection.threadId);
});

// Export MySQL connection
module.exports = connection;
