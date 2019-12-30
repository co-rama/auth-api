const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    postname : {
        type : String,
        required : true,
    },

    author : {
        type : String,
        default : "Corama"
    },

    postdate : {
        type : Date,
        default : Date.now 
    },

    postimage : {
        // type : Image,
        // default :
    }
});

module.exports = mongoose.model('Post', PostSchema);