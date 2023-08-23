const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

const Post = mongoose.model("Post", PostsSchema);

module.exports = Post;