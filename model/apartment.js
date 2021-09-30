const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema= new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
        },
    ownerAccountId:{
        type:mongoose.Schema.Types.ObjectId
        },
        location:{
            address:{type:String,required:[true,'Must enter the Address of the Apartment']},
            street:{type:String,required:[true,'Must enter the Street of the Apartment']},
            city:{type:String, required:[true,'Must enter the City of the Apartment']},
            country:{type:String, required:[true,'Must enter the Country']},
            postal:{type:String},
            type :{type:String,default:"Point"},
            coordinates:{ type: [Number], index: '2dsphere'}
        },
  
    accomodation:{
            bedroom:{type:Number, required:[true, 'Must enter number of rooms']},
            bath:{type:Number, default:0},
            others:{
                type:String,default:"No additional rooms"
            }
    },
    likes:[{
            userid:{type:Schema.Types.ObjectId},name:{type:String}
    }]
},{ timestamps: true})

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = Apartment;     