/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const mapsHelper = require('../db_service/db_helper');
module.exports = (db) => {
  // router.get("/", (req, res) => {
  //   mapsHelper.getAllUsers(db)
  //     .then(dbRes => {
  //       res.json({ dbRes });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });



  return router;
};
