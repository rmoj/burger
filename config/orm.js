var connection = require('./connection.js');

var orm = {
  selectAll: function(table) {
    var queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(table, col1, col2, valOfCol1, valOfCol2) {
    var queryString = 'INSERT INTO ?? (??,??) VALUES (?,?)';
    connection.query(
      queryString,
      [table, col1, col2, valOfCol1, valOfCol2],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },

  updateOne: function(table, col, valOfCol, id) {
    var queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?';
    connection.query(queryString, [table, col, valOfCol, id], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
