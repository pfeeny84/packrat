const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME

module.exports = {
    create,
    index,
    deletePost
}


function create(req, res){
    // confirm we access to our multipart/formdata request
    // console.log(req.body, req.file, req.user, "<req.user is being assinged in the config/auth middleware");


    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`;
        const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer }

        s3.upload(params, async function(err, data) {
            // using post model to create a post
            // The data object is the response from aws, 
            // its the callback function to upload
            const post = await Post.create({
                item: req.body.item,
                brand: req.body.brand,
                model: req.body.model,
                year: req.body.year,
                description: req.body.description, 
                photoUrl: data.Location, 
                user: req.user
            })
            

            // We have to populate the user on the post we just created
            // on a document you have to call execPopulate()
            
            const populatedPost = await post.populate('user').execPopulate();
            
    // tells the client, success create worked
            res.status(201).json({post: populatedPost})
        })

    } catch(err){
        console.log(err)
        res.json({data: err})
    }

 }

async function index(req, res){
    try {

        // on a query aka .find({}) call .exec() to execulate the .populate('user')
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){
        res.json(err)
    }
}

async function deletePost(req, res) {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ data: 'post removed' })
    } catch (err) {
        res.json({ error: err })
    }
}
