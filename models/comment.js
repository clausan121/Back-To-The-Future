
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  id: String,
  name: String,
  title: String,
  content: String

  
})



const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;