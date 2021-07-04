const request = require('request');
let breedName = process.argv.slice(2);

const breedFetcher = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(err, res, body) {
  // The code above submits an HTTP GET request
    if(err) {
      return (`${err}: status code ${res.statusCode}`);
    }
    const data = JSON.parse(body);
    const description = data[0].description;
    // Need a callback for async request, otherwise will return before it's fulfilled
    return callback(description)
  });
};


const printOutCatBreed = (breed, description) => {
  console.log(breed + description)
};
breedFetcher(breedName, printOutCatBreed);