const router = require('express').Router();
const videosData = require('../data/videos.json');


router.get('/videos',function(req,res){
    const videoList = videosData.map(video => {
        return {
            title : video.title,
            id: video.id,
            channel: video.channel,
            image: video.image
        }
    });
    res.status(200).json(videoList)
 });




 module.exports = router;