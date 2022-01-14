//User helper functions
const getUserNameById = function(db, userInfo) {
  let userValues = [userInfo];
  let queryString = `SELECT name FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user name by id from database"));
};

const getUserProfileById = function(db, userInfo) {
  let userValues = [userInfo.id];
  let queryString = `SELECT user_name, favorite_map, number_of_maps_created FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user profile by id from database"));
};

const getAllUsers = function(db) {
  return db
    .query(`SELECT * FROM users;`)
    .then(data => data.rows)
    .catch(console.error("Error running query to get all users from database"));
};


const getMapByMapId = function(db, mapID) {
  let mapValues = [mapID];
  let queryString = `SELECT * FROM maps
                        WHERE maps.id = $1`;
  return (
    db
      .query(queryString, mapValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

const addMap = function(db, mapInfo) {
  let mapValues = [mapInfo.userId, mapInfo.title];
  let queryString = `INSERT INTO maps (user_id, title)
  VALUES ($1,$2) RETURNING *;`;
  return db
    .query(queryString, mapValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const editMap = function(db, mapInfo) {
  let mapValues = [mapInfo.title,  mapInfo.mapId];
  let queryString = `UPDATE maps SET title = $1
  WHERE maps.id = $2 RETURNING *;`;
  return db
    .query(queryString, mapValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};


const getUserFavouriteMaps = function(db, userId) {
  const values = [userId];
  let queryString = `SELECT * FROM maps
                       JOIN favourites ON maps.id = favourites.map_id
                       WHERE favourites.user_id = $1;`;
  return db.query(queryString, values).then(res => res.rows)
    .catch(err => console.log(err));
};


const addUserFavouriteMap = function(db, favouriteInfo) {
  let userValues = [favouriteInfo.dataObj.map_id, favouriteInfo.userId];
  let queryString = `INSERT INTO favourites (map_id, user_id)
                    VALUES ($1, $2) RETURNING *`;
  return db.query(queryString, userValues).then(res => res.rows)
    .catch(err => console.log(err));
};


const editUserFavouriteMap = function(db, favouriteInfo) {
  let userValues = [favouriteInfo.dataObj.map_id, favouriteInfo.userId,favouriteInfo.favId];

  let queryString = `UPDATE favourites SET map_id = $1, user_id = $2
  WHERE id = $3 RETURNING *`;
  return db.query(queryString, userValues).then(res => res.rows)
    .catch(err => console.log(err));
};


const addPoints = function(db, pointInfo) {
  let pointValues = [
    pointInfo.user_id,
    pointInfo.map_id,
    pointInfo.title,
    pointInfo.description,
    pointInfo.image,
    pointInfo.latitude,
    pointInfo.longitude
  ];

  let queryString = `INSERT INTO points (user_id, map_id, title, description, image, latitude, longitude)
     VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
  return db
    .query(queryString, pointValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};


const editPoints = function(db, pointInfo) {
  let pointValues = [

    pointInfo.map_id,
    pointInfo.title,
    pointInfo.description,
    pointInfo.image,
    pointInfo.latitude,
    pointInfo.longitude,
    pointInfo.pointId
  ];


  let queryString = `UPDATE points SET map_id = $1, title = $2, description = $3, image = $4, latitude = $5 ,longitude = $6
                       WHERE points.id = $7 RETURNING *`;
  return db
    .query(queryString, pointValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const deleteMap = function(db, mapId) {
  let mapValues = [mapId];
  let queryString = `DELETE FROM maps
    WHERE id = $1`;
  return (
    db
      .query(queryString, mapValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

const deletePoint = function(db, pointId) {
  let pointValues = [pointId];
  let queryString = `DELETE FROM points
    WHERE id = $1`;
  return (
    db
      .query(queryString, pointValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};


const getAllFlag = function(db) {
  let queryString = `SELECT * FROM flags`;
  return db.query(queryString).then(res => res.rows)
    .catch(err => console.log(err));
};


const editFlagByMapId = function(db, flagInfo) {
  let flagValues = [
    flagInfo.mapId,
    flagInfo.description
  ];

  let queryString = `UPDATE flags SET description = $2
  WHERE map_id = $1
  RETURNING *`;
  return db
    .query(queryString, flagValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const addFlagByMapId = function(db, pointInfo) {
  let pointValues = [
    pointInfo.user_id,
    pointInfo.mapId,
    pointInfo.description,
  ];

  let queryString = `INSERT INTO flags (user_id,map_id, description)
     VALUES($1,$2,$3)
     RETURNING *`;
  return db
    .query(queryString, pointValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

module.exports = {
  getAllUsers,
  getUserNameById,
  getUserProfileById,
  getMapByMapId,
  addMap,
  editMap,
  getUserFavouriteMaps,
  addUserFavouriteMap,
  editUserFavouriteMap,
  addPoints,
  editPoints,
  deleteMap,
  deletePoint,
  getAllFlag,
  editFlagByMapId,
  addFlagByMapId
};
