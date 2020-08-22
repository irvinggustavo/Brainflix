const router = require("express").Router();
const videosData = require("../data/videos.json");
const commentsData = require("../data/comments.json");
const { v4: uuidv4 } = require("uuid");

router.get("/videos", (req, res) => {
  const videoList = videosData.map((video) => {
    return {
      title: video.title,
      id: video.id,
      channel: video.channel,
      image: video.image,
    };
  });
  res.status(200).json(videoList);
});

router.post("/videos", (req, res) => {
  if (!req.title || !req.description) {
    return res
      .status(400)
      .json({ message: "pls add a title & description" });
  }

  const newVideo = {
    ...req.body,
    id: uuidv4(),
    image: "../../client/src/assets/Images/Upload-video-preview.jpg",
    timestamp: new Date().toLocaleTimeString(),
  };
  videosData.push(newVideo);

  res.json(newVideo).status(200);
});

router.get("/videos/:id", (req, res) => {

  const videoId = req.params.id;
  const currentVideo = videosData.find((video) => video.id === videoId);
  currentVideo.comments = commentsData;
  currentVideo.timestamp = new Date().toLocaleTimeString();

  res.status(200).json(currentVideo);
});

module.exports = router;
