const request = require('request');
const breedSearch = process.argv[2];
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

request((URL + breedSearch), (error, response, body) => {
  if (error) {
    console.log('error:', error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Requested breed cannot be found. Please double check!');
  } else {
    console.log(data[0]['description']);
  }
});

