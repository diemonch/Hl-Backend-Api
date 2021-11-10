import { model, Schema, Document } from 'mongoose';

export interface IHobby {
    _id: string,
    passionLevel: string,
    name: string,
    year:string
  }
const hobbiesSchema= new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
        },
    passionLevel:{type:String,required:[true,'Must enter the Passion Level']},
    name:{type:String,required:[true,'Must enter the name of the Hobby']},
    year:{type:String, required:[true,'Must enter the year']}
       
  
},{ timestamps: true})

const Hobbies = model<IHobby & Document>('Hobby', hobbiesSchema);
export default Hobbies;     