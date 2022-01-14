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
  router.get("/:id", (req, res) => {
    const mapId = req.params.id;

    mapsHelper.getMapByMapId(db, mapId)
      .then(dbRes => {
        res.render({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });

  router.patch("/:id", (req, res) => {
    const mapId = req.params.id;
    const title = req.body.title;
    const mapInfo = {
      title: title,
      mapId: mapId
    };

    mapsHelper.editMap(db, mapInfo)
      .then(dbRes => {
        res.render("maps",{ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {
    const userId = req.params.id;
    const title = req.body.title;

    const mapInfo = {
      userId,
      title,
    };
    mapsHelper.addMap(db, mapInfo)
      .then(dbRes => {
        res.render({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });

  router.delete("/maps/:id", (req, res) => {
    const mapId = req.params.id;
    mapsHelper.deleteMap(db, mapId).then(() =>  res.send('Delete Map  id success,bro!!'));
  });

  return router;
};
