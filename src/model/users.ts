import { model, Schema, Document } from 'mongoose';

export  interface IUser {
    _id: string;
    name: string;
    hobbies: string[];
  }
  
const userSchema: Schema = new Schema({
  _id:{
    type: Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
    },
name:{
    type:String,
    required:[true,'Must provide a name']
},

hobbies : [{ type:Schema.Types.ObjectId, ref: 'Hobby' }]
});

const User = model<IUser & Document>('User', userSchema);

export default User;