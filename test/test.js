var request = require('supertest');
var app = require('../index.js');
 
describe('GET /', function() {
<<<<<<< HEAD
  it('respond with 404 page not found', function(done) {
=======
  it('respond with  parat change jhal ahe kay', function(done) {
>>>>>>> 445f293d64d975c66a5960db737b4ad8403cf932
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          // If there's an error, log it and pass it to the done callback
          console.error(err);
          return done(err);
        }
        // If everything is fine, invoke the done callback
        done();
      });
  });
});
