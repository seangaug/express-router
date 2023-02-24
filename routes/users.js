const express = require('express');
const router = express.Router();

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// Define an express router for the users route. One for getting all the users on the list of users
router.get('/', (req, res) => {
    res.send(users);
});

//Route for getting a particular user on the list of users (e.g. /users/2 returns the 2nd user)
router.get('/:id', (req, res) => {
    const user = users[req.params.id - 1]
    res.send(user);
});

// Route for adding a new user to the list of users.
router.use(express.json());

router.post('/', (req, res) => {
    const user = {
        name: req.body.name,
        age: req.body.age
    }
    users.push(user);
    res.send(user);
});

// Route for updating a user on the list of users.
router.put('/:id', (req, res) => {
    const index = req.params.id - 1;
    const user = users[index];
    user.name = req.body.name;
    user.age = req.body.age;
    res.send(user);
});

// Route for deleting a user from the list of users.
router.delete('/:id', (req, res) => {
    const index = req.params.id - 1;
    const user = users[index];
    users.splice(id, 1);
    res.send(user);
});

module.exports = router;