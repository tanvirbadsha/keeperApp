const express = require('express');
const mongoose = require('mongoose');
const Post = require('./model/posts');
const cors = require('cors');


const app = express();
app.use(express.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true})); // parse url-encoded requ bodies
app.use(cors({ origin: 'http://localhost:3000 '}));


const connectDB = async ()=>{
    const url = "mongodb://localhost:27017/keeperDB";
    try {
        const tryConnection = await mongoose.connect(url);
        if(tryConnection){
            console.log("database connected locally");
        }
    } catch (err) {
        console.log(err.message);
    }
}
connectDB();

app.get('/', async (req,res)=>{
    const posts = await Post.find();
    if(!posts){
        console.log('no posts found');
    }
    res.json(posts);
});

app.post('/create', (req,res)=>{
    const receivedData = req.body;
    const title = receivedData.title;
    const content = receivedData.content;

    //console.log('recieved data:', receivedData);
    const newPost = new Post({
        title: title,
        content: content
    });
    newPost.save();

    res.status(200).send('Data received and processed');
});

app.listen(4000, ()=> console.log("server is running at port 4000"));