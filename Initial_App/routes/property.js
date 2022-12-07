/**
 * Handles the property routes
 *
 * @file      property.js.
 * @author    Martin Lopez Diego Moscoso
 * @since     09/21/2022
 */

var mysql = require('mysql');

/**
 * Function that adds a new property to the database
 * @param    {Object} req    post request
 * @param    {Object} res    post response
 * @return   None
 */
exports.add = async function(req, res){
  let prop = req.body;

  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cloudsecurity",
    database: "pennywise"
  });

  sql = "INSERT INTO property (type, age, buy, current, gain, username) " + 
    "VALUES ('" + prop.type + "','" + prop.age + "','" + 
    prop.buy + "','" + prop.current + "','" + prop.gain + 
    "','" + prop.username + "')";
  db.query(sql, function (err, result) {
    if (err) {
      res.sendStatus(400);
      throw err;
    }
    res.sendStatus(201)
  });
};

/**
* Function that returns an array of properties
* @param    {Object} req    post request
* @param    {Object} res    post response
* @return   None
*/
exports.get = function(req, res){
  let usr = req.params.username;
 
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cloudsecurity",
    database: "pennywise"
  });

  var sql = "SELECT * FROM property where username='" + usr + "'";
  db.query(sql, function (err, props) {
    if (err) {
      res.sendStatus(400);
      throw err;
    }
    res.status(200).send(props);
  });
};

/**
* Function that removes a property from the database
* @param    {Object} req    post request
* @param    {Object} res    post response
* @return   None
*/
exports.remove = function(req, res){
  let propId = req.params.propId;
 
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cloudsecurity",
    database: "pennywise"
  });

  var sql = "DELETE FROM property where id='" + propId + "'";
  db.query(sql, function (err, result) {
    if (err) {
      res.sendStatus(400);
      throw err;
    }
    res.sendStatus(200);
  });
};