const request = require('request');
let breedName = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, res, body) {
  
    if(error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data || data.length === 0) {
      return callback(`Breed not found`)
    }
    const description = data[0].description
    return callback(null, description);
  });
};

module.exports = { fetchBreedDescription };