/**
 * Handles the transaction routes
 *
 * @file      transaction.js.
 * @author    Martin Lopez Diego Moscoso
 * @since     09/21/2022
 */

var mysql = require('mysql');

/**
 * Function that adds a new transaction to the database
 * @param    {Object} req    post request
 * @param    {Object} res    post response
 * @return   None
 */
exports.add = async function(req, res){
  let trans = req.body;

  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cloudsecurity",
    database: "pennywise"
  });

  sql = "INSERT INTO transaction (account, date, description, category, amount, username) " + 
    "VALUES ('" + trans.account + "','" + trans.date + "','" + 
    trans.description + "','" + trans.category + "','" + trans.amount + 
    "','" + trans.username + "')";
  db.query(sql, function (err, result) {
    if (err) {
      res.sendStatus(400);
      throw err;
    }
    res.sendStatus(201)
  });
};

/**
* Function that returns an array of transactions
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

  var sql = "SELECT * FROM transaction where username='" + usr + "'";
  db.query(sql, function (err, transactions) {
    if (err) {
      res.sendStatus(400);
      throw err;
    }
    res.status(200).send(transactions);
  });
};

/**
* Function that removes a transaction from the database
* @param    {Object} req    post request
* @param    {Object} res    post response
* @return   None
*/
exports.remove = function(req, res){
  let transId = req.params.transId;
 
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cloudsecurity",
    database: "pennywise"
  });

  var sql = "DELETE FROM transaction where id='" + transId + "'";
  db.query(sql, function (err, result) {
    if (err) {
      res.sendStatus(400);
      throw err;
    }
    res.sendStatus(200);
  });
};