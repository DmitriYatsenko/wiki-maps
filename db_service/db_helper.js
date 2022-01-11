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


module.exports = {
  getAllUsers,
  getUserNameById,
  getUserProfileById

};
