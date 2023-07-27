# How To Run:

### With Docker

docker-compose up

# OR

### start Backend

From Terminal -> cd app
then -> npm start

### Start Frontend

From terminal -> cd client
then -> npm start

The project will start on http://localhost:3000/

Admin can log in with userID : admin0 , password : 123456789
Moderator can log in with userID: mod0, password : 123456789
User can log in with UserID: user0, password : 123456789

# TechStack

- React JS
- Node JS
- Express JS
- My SQL

# Project Features

The project has 3 roles. Admin, Moderator and user.

A public user(not logged in),

- can see list of movies and search for movies or genre with keywords.
- Clicking on a movie shows details of that movie.

A user can sign up and log in and see their details registered.

An admin can -

- log in and see all the unpublished and published movies in the Admin Dashboard.
- From clicking a movie, details along with Edit button can be accessed.
- With Edit button, can be navigated to movie edit page.
- From movie edit page, a movie can be published or unpublished, deleted or updated.

Registered users can log out with log out button.

## Api's can be tested -

Post a movie -
POST : http://localhost:8080/movies/add

Get all movies -
GET:http://localhost:8080/movies/all/

Get Movie details with ID -
GET:http://localhost:8080/movies/7

Update a movie with ID -
PATCH:http://localhost:8080/movies/2

Delete a movie with ID -
DELETE:http://localhost:8080/movies/2

Search with a keyword -
GET:http://localhost:8080/movies?search=action

Sign up as a new user-
POST:http://localhost:8080/api/auth/signup

Access public resource:
GET:http://localhost:8080/api/test/all

Sign in :
POST:http://localhost:8080/api/auth/signin

Access protected resource with or w/o x-access-token (gotten from sign in)
GET:http://localhost:8080/api/test/admin

OR
GET:http://localhost:8080/api/test/mod

OR

GET:http://localhost:8080/api/test/user
