const express = require('express');
const app = express();
const cors = require('cors');

const video_routes = require('./routes/videos');

app.use(cors());
app.use(express.json());
app.use('/',video_routes);
app.use('/videos/:id', video_routes)


app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
});
