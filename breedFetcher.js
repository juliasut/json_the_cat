const request = require('request');
let breedName = process.argv.slice(2);

const breedFetcher = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(err, res, body) {
  // The code above submits an HTTP GET request
    if(err) {
      throw (err);
    }
    const data = JSON.parse(body);
    if (!data || data.length === 0) {
      return callback(`Breed ${breedName} not found`)
    }
    const description = data[0].description;
    // Need a callback for async request, otherwise will return before it's fulfilled
    return callback(description)
  });
};


const printOutCatBreed = (breed, description, err) => {
  err ? console.log(`Breed ${breedName} not found`) : console.log(breed + description)
};
breedFetcher(breedName, printOutCatBreed);