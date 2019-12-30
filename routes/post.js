const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (req, res) => {
    await Post.find({}, (err, posts) => {
        if(err){
            return res.status(400).json({success : false, error : err});
        }

        if(!posts){
            return res.status(404).json({success : false, error : 'Post not found'});
        }

        return res.status(200).json({success : true, data : posts});
    }).catch(err => console.log(err));
});