const request = require('request');
let breedName = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, res, body) {
  
    if(error) {
      return callback(error);
    }
    const data = JSON.parse(body);
    if (!data || data.length === 0) {
      return callback(`Breed ${breedName} not found`)
    }
    return callback(data[0].description)
  });
};

module.exports = { fetchBreedDescription };