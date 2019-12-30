const express = require('express');
const router = express.Router();
const User = require('../model/User');

// Get all the users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message : error});
    }
})

// Post and process all the users
router.post('/register', async (req, res) => {
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get a specific user
router.get('/:userID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userID);
        res.json(user)
    } catch (error) {
        res.json({message : error});
    }
})

// Delete specific user
router.delete('/:userID', async (req, res) => {
    try {
        const removedUser = await User.deleteOne({_id : req.params.userID});
        res.json(removedUser);
    } catch (error) {
        res.json({message : error});
    }
})

// Update a user 
router.patch('/:UserID', async (req, res) =>{
    try {
        const updatedUser = await User.updateOne({_id : req.params.userID}, 
            {$set : { name : req.body.name }});

            res.json(updatedUser);
    } catch (error) {
        res.json({message : error});   
    }
})

module.exports = router;