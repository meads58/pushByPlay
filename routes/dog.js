var _ = require('lodash');//untility class that does a lot on arrays and collections
var Dog = require('../models/dog_model.js');

module.exports = function(app) {

  //create
  app.post('/dog', function(req, res){
    var newDog = new Dog(req.body);
    newCat.save(function(err){
      if (err){
        res.json({info: 'error during dog create', error: err})
      };
    });
    res.json({info: 'dog created successfully'});
  });

  //read
  app.get('/dog', function(req, res){
    Dog.find(function(err, dogs){
      if (err){
        res.json({info: 'error during dog create', error: err})
      };
      res.json({info: 'dog found successfully', data: dogs});
    });
  });

  app.get('/dog/:id', function(req, res){
    Dog.findById(req.params.id, function(err, dog){
      if (err){
        res.json({info: 'error during dog create', error: err})
      };
      if (dog){
        res.json({info: 'dog found successfully', data: dog});
      } else {
        res.json({info: 'dog not found'});
      }
    });
  });

  //update
  app.put('/dog/:id', function(req, res){
    Dog.findById(req.params.id, function(req, res){
      if (err) {
        res.json({info: 'error during find dog', error: err});
      };
      if (dog) {
        _.merge(dog, req.body);
        cat.save(function(err){
          if (err) {
            res.json({info: 'error during saving', error: err});
          };
          res.json({info: 'dog updated successfully'});
        });
      } else {
        res.json({info: 'dog not found'});
      }
    });
  });

  //delete
  app.delete('/dog/:id', function(req, res){
    Dog.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({info: 'err during removing dog', error: err})
      };
      res.json({info: 'dog removed successfully'});
    });
  });
};
