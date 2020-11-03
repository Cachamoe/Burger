// Require Express and Router
let express = require("express");
let router = express.Router();

// Import the model 
let burger = require("../models/burger.js");

// Create Routes
router.get("/", function (req, res) {
    burger.selectAll(function (results) {
        let burgerObject = {
            burgers: results
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});


router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, 0
    ], function (result) {
        res.json({ id: result.insertId })
    });
});


router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes 
module.exports = router;

