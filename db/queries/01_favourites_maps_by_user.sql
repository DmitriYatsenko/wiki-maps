SELECT users.id as user_id,
users.name as username,
maps.title as map,
FROM users
JOIN maps ON users.id = user_id
JOIN favourites ON users.id = user_id;
