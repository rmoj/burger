var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  create: function(col1, col2, val1, val2, cb) {
    orm.insertOne('burgers', col1, col2, val1, val2, function(res) {
      cb(res);
    });
  },

  update: function(col, val, id, cb) {
    orm.updateOne('burgers', col, val, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
