const express = require('express')
const router = express.Router()
const ApartmentController = require('../controller/apartmentcontroller')
const cookieParser = require('cookie-parser');
const AuthenticationMdlware = require('../middleware/authenticate')

//Create Apartment
router.post('/api/create',AuthenticationMdlware.isAuthverified,AuthenticationMdlware.getCurrentUser,ApartmentController.create)

// Find apartments by Geo,Distance, city, country and combination of City,Country & Rooms
router.get('/api/findApartmentListbyGeoandDistance', ApartmentController.findApartmentListbyGeoandDistance)
router.get('/api/findApartmentListbyCity',ApartmentController.findApartmentListbyCity)
router.get('/api/findApartmentListbyCountry',ApartmentController.findApartmentListbyCountry)
router.get('/api/findApartmentListbyCityCountryRooms',ApartmentController.findApartmentListbyCityCountryRooms)
//Mark Apartment as Favorites,List apartments
router.post('/api/markFavoriteApartment',AuthenticationMdlware.getCurrentUser, ApartmentController.markFavoriteApartment)
router.get('/api/listFavoriteApartment',AuthenticationMdlware.getCurrentUser,ApartmentController.listFavoriteApartment)
module.exports=router;