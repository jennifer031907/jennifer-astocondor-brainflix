const express = require("express");
const router = express.Router();
const fs = require('fs');
const videos = JSON.parse(fs.readFileSync('./data/videos.json', 'utf8'));

router.get('/', (req, res) => {
    const formattedVideos = videos
        .map(video => ({
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }));
    res.status(200).json(formattedVideos);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const videoFiltered = videos.find(video => video.id === id);
    if (videoFiltered) {
        res.json(videoFiltered);
    } else {
        res.status(404).json(generageError('No video with that id exists'));
    }
});

router.post('/', (req, res) => {
    const video = req.body;
    videos.push(video);
    videoDetail.push(video);
    res.json(video);
});
const generageError = error => {
    return { message: error }
}
module.exports = router;