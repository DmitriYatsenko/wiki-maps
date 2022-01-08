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



## User Stories*
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
* /login/:id
* /user_id
* /user_id/maps
* /user_id/favorites

<!-- full RESTful compliance -->
* Browse - get /
* Read - get
* Edit - put/patch
* Add - post
* Delete - DELETE

## ERD
<!-- The user stories provide you with nouns (eg. user, posts, favourites)
Use these nouns/entities to build out your database (ie. tables are the nouns from the stories) -->
![Entity Relationship Diagram](/planning/WikiMapERD.png)

## MVP vs MVD
```
There is a concept in development of an MVP, the Minimum Viable Product
An MVP has just enough features to be useful to a user
This concept helps streamline the development process and help keep the team on target
For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
If you aren't going to demo it, don't build it
```
<!-- level one  -->
* Get one map on the screen
* Get one point on the screen
* get one user profile

## Wireframes
<!-- Draw out the structure of your web pages
This will make it much easier to build out these pages later
This is also a great opportunity to get input from all of the team members
Design matters... however you are a developer, not a designer
Get inspiration from websites you visit -->



## Delegations
* HTML/SCSS
* JS
* Ajax
* Routing (express)
* Database management

<!-- make sure tables are in 1NF form at least -->
## Tables
* Maps (id, user_id, description, count(points))
* Points (id, map_id, description)
* Users(id, user_name, count(maps), 
* favorites (id, user_id, map_id)
