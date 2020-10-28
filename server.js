let express = require("express");

// Sets up Express 
let app = express();
let PORT = process.env.PORT || 3000;
let db = require("./db/db.json");


// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// Server Listener 
app.listen(PORT, function () {
    console.log("App Listening " + PORT)
});
