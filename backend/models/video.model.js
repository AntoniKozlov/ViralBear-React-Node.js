const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Video = new Schema({
    name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    video_upload: {
        type: String
    },
    video_link: {
        type: String
    },
    video_owner:{
        type: String
    },
    signature: {
        type: Array
    },
    ip: {
       type: String
    }
},{
    collection: 'Video'
});

module.exports = mongoose.model('Video', Video);
