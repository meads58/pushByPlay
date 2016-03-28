var _ = require('lodash');//untility class that does a lot on arrays and collections
var Cat = require('../models/cat_model.js');

module.exports = function(app) {

  //create
  app.post('/cat', function(req, res){
    var newCat = new Cat(req.body);
    newCat.save(function(err){
      if (err){
        res.json({info: 'error during cat create', error: err})
      };
    });
    res.json({info: 'cat created successfully'});
  });

  //read
  app.get('/cat', function(req, res){
    Cat.find(function(err, cats){
      if (err){
        res.json({info: 'error during cat create', error: err})
      };
      res.json({info: 'cat found successfully', data: cats});
    });
  });

  app.get('/cat/:id', function(req, res){
    Cat.findById(req.params.id, function(err, cat){
      if (err){
        res.json({info: 'error during cat create', error: err})
      };
      if (cat){
        res.json({info: 'cat found successfully', data: cat});
      } else {
        res.json({info: 'cat not found'});
      }
    });
  });

  //update
  app.put('/cat/:id', function(req, res){
    Cat.findById(req.params.id, function(req, res){
      if (err) {
        res.json({info: 'error during find cat', error: err});
      };
      if (cat) {
        _.merge(cat, req.body);
        cat.save(function(err){
          if (err) {
            res.json({info: 'error during saving', error: err});
          };
          res.json({info: 'cat updated successfully'});
        });
      } else {
        res.json({info: 'cat not found'});
      }
    });
  });

  //delete
  app.delete('/cat/:id', function(req, res){
    Cat.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({info: 'err during removing cat', error: err})
      };
      res.json({info: 'cat removed successfully'});
    });
  });
};