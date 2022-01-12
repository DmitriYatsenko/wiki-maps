/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const userHelper = require('../db_service/db_helper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    userHelper.getAllUsers(db)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.get('/login/:id', (req, res) => {
    // cookie-session middleware
    req.session.user_id = req.params.id;

    // cookie-parser middleware
    res.cookie('user_id', req.params.id);

    // send the user somewhere
    res.redirect('/');
  });


  router.get("/users/:id ", (req, res) => {
    let userData = req.body;
    userHelper.getUserNameById(db, userData)
      .then((dbRes) => {
        res.json(dbRes[0]);
      });
  });
  //need test with data base
  router.get('/:id/favourites', (req, res) => {
    let userObj = {
      id: req.session.user_id
    };
    userHelper.getUserFavouriteMaps(db, userObj.id).then(dbRes => res.json(dbRes));
  });

  //need test with data base
  router.post('/:id/favourites', (req, res) => {
    let dataObj = req.body;
    userHelper.addUserFavouriteMap(db, dataObj).then((dbRes) => {
      res.json(dbRes);
    });
  });

  //need test with data base
  router.patch('/:id/favourites', (req, res) => {
    let dataObj = req.body;
    userHelper.editUserFavouriteMap(db, dataObj).then((dbRes) => {
      res.json(dbRes);
    });
  });




  return router;
};
