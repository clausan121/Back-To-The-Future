const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Movie = require('./movies')

const userSchema = new Schema({
  name: String,
  email: 
  {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: 
  {
    type: String,
    required: true,
  },
  googleID: String,
  comments: []
}, {
  usePushEach: true
  },{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
//comment