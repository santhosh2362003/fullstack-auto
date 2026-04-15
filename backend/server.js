const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Backend Working 🚀");
});

app.listen(5000, () => console.log("Server running on 5000"));
