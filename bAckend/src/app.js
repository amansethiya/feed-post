const express = require("express");
const multer = require("multer");
const app = express();
const postModel = require("./model/post.model");
const uploadFile = require("./services/storage.service");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
    tags: req.body.tags,
  });
  res.status(201).json({ message: "post added SUCCESSFULLY", post });
});

app.get("/feed", async (req, res) => {
  const post = await postModel.find();

  res.status(200).json({
    post,
  });
});

module.exports = app;
