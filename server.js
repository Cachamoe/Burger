// Require Express
let express = require("express");

// Set up Express 
let app = express();
let PORT = process.env.PORT || 3000;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static content from public folder
app.use(express.static("public"));

// Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import Routes 
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Server Listener 
app.listen(PORT, function () {
    console.log("Server Listening on: https://localhost:" + PORT)
});
