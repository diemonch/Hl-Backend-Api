# Hl-Backend-Api
Api for Home Like Assignment

######## Install ############
- git clone https://github.com/diemonch/Hl-Backend-Api.git

- cd Hl-Backend-Api

- npm install

####### Project Set Up #########
Hl-Backend-Api
  |_test_ : test file for POC with Mocha
  |config : server, token and port config
  |controller: implementation of services
  |middleware: auth verification and get current user
  |model: schema design for aprtment and user
  |routes: connecting end ppints with services
app.js : server

####### Run the Application ############

npm run dev

Application runs on port 3000 by default

###### User APIs ##########

'/api/register/' - For Registering the user

'/api/login/' - For user login
after successful login user will be provided with a Authorization Token
for example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4ZmM1ZDg3Mzk1ODk1NTY0YmJhMSIsImlhdCI6MTYzMjk5NzMzNiwiZXhwIjoxNjMzMDAwOTM2fQ.cGi3eXyhwOlvy2ajepxmdJinNeuDX4nyMOeMi92BaRM
This must be supplied in the headers for Creation service

###### Protected Route ########

 '/api/create' is for creating an Apartment 
 In postman, supply the token value from the login as a bearer.
 in header section, add key as Authorization and supply the above Key

Other  routes checks for current user:
'/api/markFavoriteApartment', '/api/listFavoriteApartment'

###### Soft Test #############

Soft test can be done via Postman, the end points are 
/api/register
/api/login
/api/create 
/api/findApartmentListbyGeoandDistance
/api/findApartmentListbyCity
/api/findApartmentListbyCountry
/api/findApartmentListbyCityCountryRooms
/api/markFavoriteApartment
/api/listFavoriteApartment

##### end point tets ######
npm test
it tests for end point /api/findApartmentListbyCity and validates if returns successfully.
