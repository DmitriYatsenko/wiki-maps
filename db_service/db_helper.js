//User helper functions
const getUserNameById = function(db, userInfo) {
  let userValues = [userInfo.id];
  let queryString = `SELECT user_name FROM users WHERE id = $1;`;
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


const getPointsByMapId = function(db, mapID) {
  // still need to test when db set up

  // let mapValues = [mapID];
  // let queryString = `SELECT * FROM points
  //                       WHERE map_id = $1`;
  // return (
  //   db
  //     .query(queryString, mapValues)
  //     .then(res => {
  //       return res.rows;
  //     })
  //     .catch(err => console.log(err))
  // );

  //dummy data for now
  let dbRes = [
    {id: 1,
      name: 'toronto',
      latitude: 45.5017,
      longitude: -73.5673,
      map_id:mapID
    }
  ];
  return Promise.resolve(dbRes);
};

const addMap = function(db, mapInfo) {
  // still need to test when db set up

  // let mapValues = [mapInfo.name, mapInfo.latitude, mapInfo.longitude];
  // let queryString = `INSERT INTO maps (name, latitude, longitude)
  // VALUES ($1,$2,$3) RETURNING *;`;
  // return db
  //   .query(queryString, mapValues)
  //   .then(res => res.rows[0])
  //   .catch(err => console.log(err));
  let dbRes = [
    {id: 2,
      name: 'Markham',
      latitude: 46,
      longitude: -60,
    }
  ];
  return Promise.resolve(dbRes);

};

const editMap = function(db, mapInfo) {
  // still need to test when db set up

  //let mapValues = [mapInfo.name, mapInfo.latitude, mapInfo.longitude, mapInfo.map_id];
  // let queryString = `UPDATE maps SET name = $1, latitude = $2, longitude = $3
  // WHERE map_id = $4;
  // RETURNING *;`;
  // return db
  //   .query(queryString, mapValues)
  //   .then(res => res.rows[0])
  //   .catch(err => console.log(err));
  let dbRes = [
    {id: 3,
      name: mapInfo.name,
      latitude: mapInfo.latitude,
      longitude: mapInfo.longitude,
      map_id:mapInfo.map_id
    }
  ];
  return Promise.resolve(dbRes);

};
// need test function
const getUserFavouriteMaps = function(db, userObj) {
  const values = [userObj.id];
  let queryString = `SELECT * FROM maps
                       JOIN favourites ON maps.id = favourites.Map_id
                       JOIN users ON users.id = maps.user_id
                       WHERE users.id = $1;`;
  return db.query(queryString, values).then(res => res.rows)
    .catch(err => console.log(err));
};

//function need test
const addUserFavouriteMap = function(db, favouriteInfo) {
  let userValues = [favouriteInfo.Map_id, favouriteInfo.User_id];
  let queryString = `INSERT INTO favourites (Map_id, User_id)
                    VALUES ($1, $2) RETURNING *`;
  return db.query(queryString, userValues).then(res => res.rows)
    .catch(err => console.log(err));
};

//function need test
const editUserFavouriteMap = function(db, favouriteInfo) {
  let userValues = [favouriteInfo.Map_id, favouriteInfo.User_id];
  let queryString = `UPDATE favourites SET Map_id = $1, User_id = $2 RETURNING *`;
  return db.query(queryString, userValues).then(res => res.rows)
    .catch(err => console.log(err));
};

//function need test
const addPoints = function(db, pointInfo) {
  let pointValues = [
    pointInfo.user_id,
    pointInfo.title,
    pointInfo.image,
    pointInfo.latitude,
    pointInfo.longitude,
    pointInfo.description,
  ];
  //querry need to write when database set up
  // bellow querry need to update later
  let queryString = `INSERT INTO points (user_id, map_id, title,description,image, latitude, longitude)
                       VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
  return db
    .query(queryString, pointValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};


//function need test
const editPoints = function(db, pointInfo) {
  let pointValues = [
    pointInfo.user_id,
    pointInfo.title,
    pointInfo.image,
    pointInfo.latitude,
    pointInfo.longitude,
    pointInfo.description,
  ];
  //querry need to write when database set up
  // bellow querry need to update later
  let queryString = `UPDATE points SET user_id = $1, map_id = $2, title = $3, description = $4, image = $5, latitude = $6 ,longitude = $7
                       VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
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
  let queryString = `DELETE FROM maps
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

// need test function
const getAllFlag = function(db) {
  let queryString = `SELECT * FROM flags`;
  return db.query(queryString).then(res => res.rows)
    .catch(err => console.log(err));
};

//function need test
const editFlagByMapId = function(db, flagInfo) {
  let flagValues = [
    flagInfo.mapId,
    flagInfo.description
  ];
  //querry need to write when database set up
  // bellow querry need to update later
  let queryString = `UPDATE flags SET description = $2
  WHERE map_id = $1
  RETURNING *`;
  return db
    .query(queryString, flagValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};



module.exports = {
  getAllUsers,
  getUserNameById,
  getUserProfileById,
  getPointsByMapId,
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
  editFlagByMapId
};
