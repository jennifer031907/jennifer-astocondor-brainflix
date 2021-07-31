const express = require('express');
const cors = require('cors');
const videoRoutes = require("./routes/videos");

const app = express();

// setup app
require('dotenv').config()
const port = process.env.PORT || 8080;

//Middleware 
app.use(express.json());
app.use(express.static("public"))
app.use(cors());

app.use('/api/videos', videoRoutes);

app.listen(port, () => {
    console.log(`Sprint 3 is running on port ${port}`)
})