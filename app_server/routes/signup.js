const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 

router.get('/', ctrlMain.signup); 
module.exports = router;
