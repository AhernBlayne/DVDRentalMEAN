const mongoose = require('mongoose');
const dvd = mongoose.model('Dvd');

const _buildDvdList = function(req, res, results, stats) {
  let dvds = [];
  results.forEach((doc) => {
    dvds.push({
      title: doc.obj.title
    });
  });
  return dvds;
};

const dvdsRead = function (req, res) {
    dvd
      .find()
      .exec((err, dvd) => {
        if (!dvd) {
          res	
            .status(404) 
            .json({	
              "message": "dvdid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(dvd);
      });		
};

const dvdsCreate = function (req, res) {
 dvd.create({
    title: req.body.title
  }, (err, dvd) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(dvd);
    }
  });
};

const dvdsReadOne = function (req, res) {
  if (req.params && req.params.dvdid) {
    dvd
      .findById(req.params.dvdid)
      .exec((err, dvd) => {
        if (!dvd) {
          res	
            .status(404) 
            .json({	
              "message": "dvdid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(dvd);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No dvdid in request"
      });		
  }
};

const dvdsUpdateOne = function (req, res) {
  if (!req.params.dvdid) {
    res
      .status(404)
      .json({
        "message": "Not found, dvdid is required"
      });
    return;
  }
  dvd
    .findById(req.params.dvdid)
    .select('-reviews -rating')
    .exec((err, dvd) => {
      if (!dvd) {
        res
          .json(404)
          .status({
            "message": "dvdid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      dvd.title = req.body.title;

      dvd.save((err, dvd) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(dvd);
        }
      });
    }
  );
};

const dvdsDeleteOne = function (req, res) {
  const dvdid = req.params.dvdid;
  if (dvdid) {
    dvd
      .findByIdAndRemove(dvdid) 
      .exec((err, dvd) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No dvdid"
      });
  }
};

module.exports = {
  dvdsCreate,
  dvdsRead,
  dvdsReadOne,
  dvdsUpdateOne,
  dvdsDeleteOne
};
