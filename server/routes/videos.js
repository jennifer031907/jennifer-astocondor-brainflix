const express = require("express");
const router = express.Router();
const fs = require('fs');
const videos = JSON.parse(fs.readFileSync('./data/videos.json', 'utf8'));

router.get('/', (req, res) => {
    res.status(200).json(videos);
});

module.exports = router;