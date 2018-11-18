const orm = require('../config/orm.js');

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(results) {
      cb(results);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(results) {
      cb(results);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(results) {
      cb(results);
    });
  }
};

module.exports = burger;