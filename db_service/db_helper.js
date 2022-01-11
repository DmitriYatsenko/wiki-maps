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
  // VALUES ($1,$2,$3,$4) RETURNING *;`;
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




module.exports = {
  getAllUsers,
  getUserNameById,
  getUserProfileById,
  getPointsByMapId,
  addMap,
  editMap

};
