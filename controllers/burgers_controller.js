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
    ], function (results) {
        res.json({ id: results.insertId })
    });
});


router.put("/api/burgers/:id", function (req, res) {
    let id = req.params.id;
    
    burger.updateOne(id, function (results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

// Export routes 
module.exports = router;




