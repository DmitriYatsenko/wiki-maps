# WIKI MAPS
A web app that allows users to collaboratively create maps which list multiple "points". For example: "Best Places to Eat Around Town" or "Locations of Movie Scenes".

## Requirements
* users can see a list of the available maps
* users can view a map
* a map can contain many points
* each point can have: a title, description, and image
* authenticated users can create maps
* authenticated users can modify maps (add, edit, remove points)
* users can favourite a map
* users have profiles, indicating their favourite maps and maps they've contributed to
* use http://leafletjs.com/ or https://developers.google.com/maps/



## User Stories
<!-- A user story describes how users will interact with your application. They have the form: As a ___, I want to _, because ____.
eg. As a user, I want to be able to save posts, because I want to review them later. ser stories can also be negated: As a __, I shouldn't be able to _, because ___.
eg. As a user, I shouldn't be able to edit other users posts, because I don't own those posts. -->
* As a user, I want to see a list maps, 
* because this will help me find points.
* As a user, I want to view points, because I want to see the image, title and description of the point.
* As a user I want see the title, desciption, and image of the point because I want to see more information about the location.
* As an authenticated user, I should be able to create a new map or delete an existing one.
* As an unauthenticated user, I shouldn't be able to create a new map or delete an existing one.
* As an authenticated user, I should be able to create/alter a point or delete an existing one.
* As an unauthenticated user, I shouldn't be able to create/alter a point or delete an existing one.
* As a user, I want to select which map is my favorite because so that I know my favourites.
* As a user, I want to have a profile because I want other people to know what my favourite maps are and what maps I have made!

``` 
Stretch 
```
* As a user I want to make private maps because so they are hidden from other users.
* As a user I want to be able to flag inappropriate maps because so that they are flagged.  
* As an administrator I want to be able to delete maps that users have posted because they may be inappropriate.
* As an administrator I want to be able to have a list of maps that are inappropriate to delete.

## User Scenarios
<!-- A user scenario is a syntactic alternative to user stories
They have the form: Given __, when _, then ____.
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites.
You can also chain on an and to user stories/scenarios
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites and the save icon will change to indicate success. Be more vague, not too specific.-->

### Unauthenticated
* Given that I visit, then I can view all the maps users have made, *except for private maps **but that is stretch***.
* Given that I am viewing a map, I can view the points that have been made on that map.
* Given that I am viewing a point on the map, then I can view image, description and title.
* Given that I am on the site, I can see that user's profile.
* Given that I am on the user's profile, I can view that profile's image, description and username.
* Given that I am on the user's profile, I can view that user's favourite maps.

### Authenticated
* Given that I visit, when I click on a map, then I should be able to edit that map.
* Given that I visit a point, when I click on a point, then I should be able to edit that point.
* Given that I visit a map, when I click on the favorites, then I should add that map to my favourites list.
 
```
Stretch
```
* Given that I am on my profile I should be see all my private maps.
* Given that I am logged, when I view a map, I can flag that map.
* Given that I am not logged in, when I click on a map-point, then I should be redirected to that location on google maps/earth

### Admnistrator
* Given that I am not administrator, when I view map page, then I should not see private maps. 
* Given that I am on another user's profile, when I view their profile, then I should not see private maps. 
* Given that I am an administrator, when I click on the list of flagged maps, then I should be able to delete and review maps that are flagged.



## User Login
* Don't do it
* Seriously, don't do it
* We know that you know how to register and login users
```js 
// do this instead
app.get('/login/:id', (req, res) => {
  // cookie-session middleware
  req.session.user_id = req.params.id;

  // cookie-parser middleware
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
}); 
```

## Routes
<!-- Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
Remember RESTful conventions (they make it much easier) -->
* / 
  ** front page
* /login/:id 
  ** create cookies/sessions for user
* /users/:id 
  ** view user profile
* /maps/:id 
  ** view a map
  ** edit/add/alter a map
* /points/:id
  ** edit/add/alter a point
* user/:id/favorites 
  ** view favourites
  ** edit/add/alter favourites
* /flags
  ** view flagged maps
  ** flag maps
<!-- stretch -->

<!-- full RESTful compliance -->
* Browse 
  ** get: /, /users/:id, login/:id
* Read
  ** get: /maps/:id, points/:id 
* Edit 
  ** put: /maps/:id
  ** patch: /flags
  ** patch: /points/:id
* Add 
  ** post: user/:id/favorites
* Delete 
  ** DELETE: /maps/:id
  ** DELETE: /points/:id 

## ERD
<!-- The user stories provide you with nouns (eg. user, posts, favourites)
Use these nouns/entities to build out your database (ie. tables are the nouns from the stories) -->
![Entity Relationship Diagram](./docs/WikiMapERD.png)

## MVP vs MVD
```
There is a concept in development of an MVP, the Minimum Viable Product
An MVP has just enough features to be useful to a user
This concept helps streamline the development process and help keep the team on target
For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
If you aren't going to demo it, don't build it
```
<!-- level one MVD -->
* Get one map on the screen
* Get one point on the screen
* get one user profile


## Wireframes
<!-- Draw out the structure of your web pages
This will make it much easier to build out these pages later
This is also a great opportunity to get input from all of the team members
Design matters... however you are a developer, not a designer
Get inspiration from websites you visit -->

![Wire Frame Diagram](./docs/wireframe.png) 
<!-- wireframe -->
## Delegations
* HTML/SCSS/JQUERY/JS
* Routing (express) 
  ** GARY CUI
* Database management

### Git Workflow
Try to commit every ten lines but  if you can't try  to split commits based on  the file you were working on.
* GARY'S WORKFLOW
  ** git branch feature/routes
  ** git checkout feature/routes
  ** git status
  ** git pull
  ** git add <FILES HERE>
  ** git commit feature/routes
  ** git push 

<!-- make sure tables are in 1NF form at least -->
## Tables
```sql
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id UUID,
  authenticated BOOLEAN,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT
  );
  DROP TABLE IF EXISTS maps;
CREATE TABLE maps (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  private BOOLEAN,
  flag BOOLEAN
  );
  DROP TABLE IF EXISTS flags;
CREATE TABLE flags (
  id INTEGER PRIMARY KEY,
  map_id UUID REFERENCES maps(id),
  description TEXT
  );
  DROP TABLE IF EXISTS points;
CREATE TABLE points (
  id INTEGER PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  map_id  UUID REFERENCES maps(id),
  title TEXT NOT NULL, 
  description TEXT,
  image TEXT
  longitude FLOAT,
  latitude FLOAT 
  );
  DROP TABLE IF EXISTS favourites;
CREATE TABLE favourites (
  id INTEGER PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  map_id  UUID REFERENCES maps(id)
  );
  DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
  id INTEGER PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  flag_id INTEGER REFERENCES flags(id)
  );
```    
  
  


