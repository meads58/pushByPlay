//request is an easy way to make HTTP/HTTPS REST requests.
var _ = require('lodash')
var r = require('request').defaults({
  json: true
});

var async = require('async');

module.exports = function(app) {

  //read
  app.get('/pets', function (req, res) {

    async.parallel({
      cat: function(callback){
        r({uri: 'http://localhost:3000/cat'}, function(error, reponse, body){
          if (error) {
            callback({service: 'cat', error: error});
            return;
          };
          if (!error && reponse.statusCode === 200) {
            callback(null, _.map(body.data, 'name'));
          } else {
            callback(response.statusCode);
          }
        });
      },
      dog: function(callback){
        r({uri: 'http://localhost:3001/dog'}, function(error, reponse, body) {
          if (error) {
            callback({service: 'dog', error: error});
            return;
          };
          if (!error && reponse.statusCode === 200) {
            callback(null, body);
          } else {
            callback(response.statusCode);
          }
        });
      }
    },
    function(error, results) {
      res.json({
        error: error,
        results: results
      });
    });
  });
};
