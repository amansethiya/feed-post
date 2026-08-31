const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
  tags: String,
});

const postModel = mongoose.model("post", postSchema); //here post is a collection name

module.exports = postModel;
