const Apartment = require('../model/apartment');

const create = (req,res,next)=>{
   
    let apartment = new Apartment({
            ownerAccountId:res.locals.user,
            location:{
            address:req.body.location.address,
            street:req.body.location.street,
            city:req.body.location.city,
            country:req.body.location.country,
            postal:req.body.location.postal,
            type:req.body.location.type,
            coordinates:req.body.coordinates
              },
            accomodation:{
                bedroom:req.body.accomodation.bedroom,
                bath:req.body.accomodation.bath,
                others:req.body.accomodation.others
            }

    })
    apartment.save()
    .then(response =>{
        res.json({message:'Apartment has been created' })
    })
    .catch(error =>{
        res.json({
            message:'Error while creating this apartment', 
            error:error.message
            
        })
    })

}


const findApartmentListbyGeoandDistance= (req,res,next) =>{
    const longitude = parseFloat(req.body.long);
    const latitide = parseFloat(req.body.lat);
        Apartment.find({
            $nearSphere: {$geometry: {type: "Point", coordinates:[longitude, latitide]},$maxDistance:parseInt(req.body.distance)}
        
    }).find((error, result)=>{
        if(error){res.json(error)}
        res.send(result);
    })
        
} 

const findApartmentListbyCity= async (req,res,next) =>{
        try{
        let result = await Apartment.find({'location.city':req.body.city}).select('location')
        res.send(result);
        }
        catch(err) {
            res.send(err.message);
        }
    }
        
const findApartmentListbyCountry= async (req,res,next) =>{
     try{
        let result = await Apartment.find({'location.country':req.body.country}).select('location')
        res.send(result);
        }
        catch(err) {
            res.send(err);
        }
    }

    const findApartmentListbyCityCountryRooms= async (req,res,next) =>{
        try{
           let result = await Apartment.find({$and:[{'location.city':req.body.city},
           {'location.country':req.body.country},
           {'accomodation.bedroom':parseInt(req.body.bedroom)}]}).select('location')
           res.send(result);
           }
           catch(err) {
               res.send(err);
           }
       }


const markFavoriteApartment = (req,res,next)=>{
    Apartment.findOneAndUpdate({ _id: req.body.id }, { $push: { "likes":{userid: res.locals.user}} })
        .then(response =>{
            res.json({message:'Your Like for this apartment is updated' })
        })
        .catch(error =>{
            res.json({
                message:'Error while Updating this apartment', 
                error:error.message
                
            })
        })
    }

const listFavoriteApartment = async (req,res,next) =>{
    try{
       let result = await Apartment.find({"likes.userid":res.locals.user}).select('location')
       res.send(result);
       }
       catch(err) {
           res.send(err);
       }
   }


module.exports = {
    create:create,
    findApartmentListbyGeoandDistance:findApartmentListbyGeoandDistance,
    findApartmentListbyCity:findApartmentListbyCity,
    findApartmentListbyCountry:findApartmentListbyCountry,
    findApartmentListbyCityCountryRooms:findApartmentListbyCityCountryRooms,
    markFavoriteApartment:markFavoriteApartment,
    listFavoriteApartment:listFavoriteApartment
}

