const express = require('express');
const contactUs = express.Router();

const utils = require('../utils/sendMail');

contactUs.route('/addContact').post(function (req, res) {
   utils.sendMail(req,res, true);
});

module.exports = contactUs;
