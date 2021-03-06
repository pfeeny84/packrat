const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    item: String,
    brand: String,
    model: String,
    year: Number,
    photoUrl: String,
    description: String,
    likes: [likesSchema]
  })
 

module.exports = mongoose.model('Post', postSchema);