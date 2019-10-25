var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(data) {
      cb(data);
    });
  },
  insert: function(insertObj, cb) {
    orm.insertOne('burgers', insertObj, function(data) {
      cb(data);
    });
  },
  update: function(bid, isEaten,cb) {
    orm.updateOne('burgers', bid, isEaten, function(data) {
      cb(data);
    });
  },
	deleteOne: function(bid,cb) {
    orm.deleteOne('burgers', bid, function(data) {
      cb(data);
    });
  },
};

module.exports = burger;
