const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const config = require('./db/db.js');
const submitVideo = require('./routes/submitVideo');
const contactUs = require('./routes/contactUs');

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {useNewUrlParser: true}).then(
    () => {
        console.log('Database is connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    }
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use('/submitVideo', submitVideo);
app.use('/contactUs', contactUs);
app.use(express.static('public'));
app.use(fileUpload());
app.use(function (req, res) {
    res.status(404).send({msg: "Sorry, page not found"});
});

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});
