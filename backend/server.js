const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());

mongoose.connect(process.env.DB_URL || 'mongodb://db:27017/mytask');

app.get('/api/status', (req, res) => {
    res.json({ message: "Backend & MongoDB Connected Successfully!" });
});

app.listen(5000, () => console.log('Server running on 5000'));
