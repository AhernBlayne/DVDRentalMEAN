const express = require('express');
const router = express.Router();
const ctrlDvds = require('../controllers/dvds');

/* dvds page*/
router.get('/', ctrlDvds.homelist);
module.exports = router;
