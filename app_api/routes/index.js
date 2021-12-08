const express = require('express');
const router = express.Router();
const ctrlDvds = require('../controllers/dvds');

// dvds
router
  .route('/dvds')
  .get(ctrlDvds.dvdsRead)
  .post(ctrlDvds.dvdsCreate);

router
  .route('/dvds/:dvdid')
  .get(ctrlDvds.dvdsReadOne)
  .put(ctrlDvds.dvdsUpdateOne)
  .delete(ctrlDvds.dvdsDeleteOne);
  

module.exports = router;
