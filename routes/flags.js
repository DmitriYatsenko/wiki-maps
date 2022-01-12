/*
 * All routes for Flags are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const flagHelper = require('../db_service/db_helper');
module.exports = (db) => {
  router.get("/flags", (req, res) => {
    flagHelper.getAllFlag(db)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.patch("/flags/:mapId", (req, res) => {
    const mapId = req.params.mapId;
    const description = req.body.description;
    const flagInfo = {
      mapId:mapId,
      description:description
    };

    flagHelper.editFlagByMapId(db, flagInfo)
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
