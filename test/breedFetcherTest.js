const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    
    fetchBreedDescription('Siberian', (error, description) => {
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      assert.equal(error, null);
      assert.equal(expectedDesc, description.trim());
      done();
    });
  });

  it('returns an error message if the input breed name invalid', (done) => {
    fetchBreedDescription('jjkk', (error, description) => {

      const expectedErr =`Breed not found`;
      assert.equal(error, expectedErr);
      done();
    });
  });
  
}); 