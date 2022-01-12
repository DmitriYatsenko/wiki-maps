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

    mapsHelper.getPointsByMapId(db, mapId)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.patch("/:id", (req, res) => {
    const mapId = req.params.id;

    //get name, latitude , longtitude from front end
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longtitude = req.body.longtitude;
    const mapInfo = {
      name:name,
      latitude:latitude,
      longtitude:longtitude,
      map_id:mapId
    };

    mapsHelper.editMap(db, mapInfo)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {
    const mapId = req.params.id;
    //get name, latitude , longtitude from front end
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longtitude = req.body.longtitude;
    const mapInfo = {
      name:name,
      latitude:latitude,
      longtitude:longtitude
    };
    mapsHelper.addMap(db, mapInfo)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/points/:id", (req, res) => {
    const mapId = req.params.id;
    //need to update after database correct
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longtitude = req.body.longtitude;
    const pointInfo = {
      name:name,
      latitude:latitude,
      longtitude:longtitude
    };
    mapsHelper.addPoints(db, pointInfo)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.patch("/points/:id", (req, res) => {
    const mapId = req.params.id;

    // still need fix according our database set up
    const user_id = req.body.user_id;
    const title = req.body.title;
    const image = req.body.image;
    const latitude = req.body.latitude;
    const longitude = req.body.longtitude;
    const description = req.body.description;

    const pointValues = {
      user_id:user_id,
      title:title,
      image:image,
      latitude:latitude,
      longitude:longitude,
      description:description,
    };
    mapsHelper.editPoints(db, pointValues)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};
