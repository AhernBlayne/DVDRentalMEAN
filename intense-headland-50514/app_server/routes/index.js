const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 
/* GET home page. */
router.get('/', ctrlMain.viewmovies); 
module.exports = router;

//router.get('/', ctrlMain.signup); 
//module.exports = router;

//router.get('/', ctrlMain.index); 
//module.exports = router;
