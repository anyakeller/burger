var connection = require('./connection.js');

var orm = {
  selectAll: function(tableName,cb) {
    var queryString = "SELECT * FROM "+tableName;
    connection.query(queryString,[tableName],  function(
      err,
      result,
    ) {
      if (err) throw err;
      console.log(result);
			cb(result);
    });
  },
  insertOne: function(tableName ,insertData,cb) {
    var queryString = "INSERT INTO "+tableName+" (burger_name, devoured) VALUES (? , ?)";
    console.log(queryString);
    connection.query(queryString, [insertData.name, insertData.devoured], function(
      err,
      result,
    ) {
      if (err) throw err;
      console.log(result);
			cb(result);
    });
  },
  updateOne: function(tableName,bid,isEaten,cb) {
    var queryString = "UPDATE " +tableName+ " SET devoured=" +isEaten +" WHERE id = "+bid;
    console.log(queryString);
    connection.query(queryString, function(
      err,
      result,
    ) {
      if (err) throw err;
      console.log(result);
			cb(result);
    });
  },
  deleteOne: function(tableName,bid,cb) {
    var queryString = "DELETE FROM " +tableName+ " WHERE id = "+bid;
    console.log(queryString);
    connection.query(queryString, function(
      err,
      result,
    ) {
      if (err) throw err;
      console.log(result);
			cb(result);
    });
  }
};

module.exports = orm;
