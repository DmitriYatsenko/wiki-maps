SELECT users.id as user_id,
users.name as username,
maps.title as map_title
FROM users
JOIN maps ON users.id = user_id
JOIN favourites ON users.id = user_id;
