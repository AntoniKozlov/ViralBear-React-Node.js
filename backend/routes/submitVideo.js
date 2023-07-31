const express = require('express');
const submitVideo = express.Router();
const fs = require('fs');
var multer = require('multer');

const utils = require('../utils/sendMail');
let Video = require('../models/video.model');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

var upload = multer({storage: storage, limits: {fileSize: 1677721600}}).single('file');

submitVideo.route('/upload').post(function (req, res) {
    let dirName = 'public', limitSizeFolder = 7086696038.4;
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
    var sizeFolder = 0, files = fs.readdirSync(`./${dirName}`);

    for (let i = 0; i < files.length; i++) {
        sizeFolder += fs.statSync(`./${dirName}/${files[i]}`).size;
    }

    if (sizeFolder <= limitSizeFolder) {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json({msg: "Video failed to load! Try again"})
            } else if (err) {
                return res.status(500).json({msg: "Video failed to load! Try again"})
            }
            return res.status(200).send({file: req.file, msg: "Video has been uploaded successfully!"})
        })
    } else {
        return res.status(500).send({
            file: true,
            msg: "Our server is full, upload the video to video hosting and share the link with us"
        })
    }
});

submitVideo.route('/addVideo').post(function (req, res) {
    let video = new Video(req.body);
    video.save()
        .then(video => {
            return res.status(200).send({msg: "Data was sent successfully!"})
        })
        .catch(err => {
            return res.status(500).send({msg: "Data wasn't sent! Try again"})
        });
    utils.sendMail(req, res, false);
});

submitVideo.route('/storageSize').post(function (req, res) {
    const dirName = 'public', limitSizeFolder = 7516192768, limitSizeVideo = 209715200;
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
    var sizeFolder = 0, files = fs.readdirSync(`./${dirName}`);

    for (let i = 0; i < files.length; i++) {
        sizeFolder += fs.statSync(`./${dirName}/${files[i]}`).size;
    }

    if (!req.body.file)
        return res.status(200).send({
            closeAccess: false,
            msg: "Your data will now start loading..."
        });

    if (req.body.fileSize > limitSizeVideo)
        return res.status(500).send({
            closeAccess: true,
            msg: "Your video is too large, upload it to video hosting and share the link with us"
        });

    if (((req.body.fileSize + sizeFolder) > limitSizeFolder) && req.body.file)
        return res.status(500).send({
            closeAccess: true,
            msg: "Our server is full, upload the video to video hosting and share the link with us"
        });

    return res.status(200).send({
        closeAccess: false,
        msg: "Your video will now start loading..."
    });
});

module.exports = submitVideo;
