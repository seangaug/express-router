const express = require('express');
const router = express.Router();

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// Define an express router for the fruits route. One for getting all the fruits on the list 
router.get('/', (req, res) => {
    res.send(fruits);
});

// Route for getting a particular fruit on the list of fruits (e.g. /fruits/2 returns the 2nd fruit).
router.get('/:id', (req, res) => {
    const fruit = fruits[req.params.id - 1]
    res.send(fruit);
});

module.exports = router;
