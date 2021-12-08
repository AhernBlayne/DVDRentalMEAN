const request = require('request');
const apiOptions = { 
server : 'localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://salty-reaches-43799.herokuapp.com/'; 
}


const requestOptions = { 
url : 'http://localhost/api/dvds', 
method : 'GET', 
json : {},
qs : { 
offset : 20 
} 
}; 


request(requestOptions, (err, response, body) => { 
if (err) { 
console.log(err); 
} else if (response.statusCode === 200) { 
console.log(body); 
} else { 
console.log(response.statusCode); 
} 
});


const _renderHomepage = function(req, res, responseBody){ 
res.render('dvds-list', {
title: 'dvd',
pageHeader: {
title: 'dvd',
strapline: 'dvd'
},
sidebar: "dvd",
dvds: responseBody 
});
};


const homelist = function(req, res){
const path = '/api/dvds'; 
const requestOptions = { 
url : apiOptions.server + path, 
method : 'GET', 
json : {}
}; 
request(
requestOptions,function(err, response, body) {
_renderHomepage(req, res, body); 
}
);
};


module.exports = {
  homelist
};