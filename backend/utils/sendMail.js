const express = require('express');
var nodemailer = require('nodemailer');

function sendMail(req, res, needResponse) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'licensingviralbear@gmail.com',
            pass: '0BfREz9x'
        }
    });

    var mailOptions = {
        from: 'licensingviralbear@gmail.com',
        to: 'Licensing@viralbear.ru',
        subject: needResponse ? req.body.subject : `New ${req.body.video_link ? 'link' : 'video'} was added to viralbear`,
        html:
            needResponse ? (req.body.message + '<br/>Name: <i>' + req.body.name + '</i><br/>Email: <strong>' + req.body.email + '</strong>') :
                ((req.body.video_link ? ('link: ' + req.body.video_link) : ('video:' + req.body.video_upload)) + '<br/>Name: <i>' + req.body.name +
                    ' ' + req.body.last_name + '</i><br/>Email: <strong>' + req.body.email + '</strong>')
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (needResponse) {
            if (error) {
                return res.status(500).send({error: error, msg: "Contacts weren't sent! Try again"});
            } else {
                return res.status(200).send({info: info, msg: "Contacts were sent successfully!"});
            }
        }
    });
}

module.exports = {sendMail};

