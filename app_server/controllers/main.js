/* GET home page */
const viewdvds = function(req, res){ 
res.render('viewdvds'); }

const signup = function(req, res){ 
res.render('signup'); }

const signin = function(req, res){ 
res.render('signin'); }

const about = function(req, res){ 
res.render('about'); }

module.exports = { 
signin,
signup,
about,
viewdvds
};

