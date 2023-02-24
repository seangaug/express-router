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

// Route for adding a new fruit to the list of fruits.
router.use(express.json());
router.post('/', (req, res) => {
    const fruit = {
        name: req.body.name,
        color: req.body.color
    }
    fruits.push(fruit);
    res.send(fruit);
});

// Route for updating a fruit on the list of fruits.
router.put('/:id', (req, res) => {
    const index = req.params.id - 1;
    const fruit = fruits[index];
    fruit.name = req.body.name;
    fruit.color = req.body.color;
    res.send(fruit);
});

// Route for deleting a fruit from the list of fruits.
router.delete('/:id', (req, res) => {
    const index = req.params.id - 1;
    const fruit = fruits[index];
    fruits.splice(id, 1);
    res.send(fruit);
});

module.exports = router;
