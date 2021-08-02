const express = require("express");
const router = express.Router();
const fs = require('fs');
const db = './data/videos.json'
let videos = JSON.parse(fs.readFileSync(db, 'utf8'));

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
    const videosStringify = JSON.stringify(videos);
    fs.writeFileSync(db, videosStringify);
    res.json(video);
});
router.post('/:id/comments', (req, res) => {
    const { id } = req.params;
    let videoFound = null;
    const comment = req.body;
    videos = videos.map(video => {
        if (video.id === id) {
            videoFound = video;
            video.comments.push(comment);
        }
        return video;
    })
    if (videoFound) {
        res.json(comment);
    } else {
        res.status(404).json(generageError('No video with that id exists'));
    }
});
const generageError = error => {
    return { message: error }
}
module.exports = router;