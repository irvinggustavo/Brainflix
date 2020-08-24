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
  if (!!req.title || !!req.description) {
    return res.status(400).json({ message: "pls add a title & description" });
  }
  const { title, description, image } = req.body;

  const newVideo = {
    title,
    description,
    image,
    channel: "unknown",
    id: uuidv4(),
  };

  videosData.push(newVideo);

  res.status(200).json(newVideo);
});

router.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const currentVideo = videosData.find((video) => video.id === videoId);
  currentVideo.comments = commentsData;
  currentVideo.timestamp = new Date().toLocaleTimeString();

  res.status(200).json(currentVideo);
});

// it works on postman but i couldn't make the link between the fron end and the back end
router.put("/videos/:id/likes", (req, res) => {
  const videoId = req.params.id;
  const currentVideo = videosData.find((video) => video.id === videoId);
  currentVideo.likes = currentVideo.likes + 1;

  res.send("updated");
});

module.exports = router;
