const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    const data = JSON.parse(body);
    if (error) {
      callback(error);
    }
    if (response.statusCode !== 200) {
      callback(null,'HTTP Response: ${response.statusCode}');
    }
    if (data[0] === undefined) {
      callback('Requested breed cannot be found. Please double check!');
    } else if (data[0]['description']) {
      callback(null, data[0]['description']);
    }
  });
};


module.exports = { fetchBreedDescription };
