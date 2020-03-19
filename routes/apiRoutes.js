var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function(app) {
  // Get all examples
  
  app.get("/api/words/", function(req, res) {
    db.Words.findAll({
      order: [Sequelize.literal("RAND()")],
      limit: 25
    }).then(function(dbWords) {
      res.json(dbWords);
    });
  });

  

  // Create a new example
  // app.post("/api/words", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
