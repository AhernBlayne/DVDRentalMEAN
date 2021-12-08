const express = require('express');
const router = express.Router();
const ctrlDvds = require('../controllers/dvds');


router.get('/', ctrlDvds.homelist);
module.exports = router;
