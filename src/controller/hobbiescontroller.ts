import {Request, Response } from  'express';
import { Document } from 'mongoose';
import Hobbies,{IHobby} from  '../model/hobbies';
import User from '../model/users'
class HobbiesController{
public addHobby =  (req:Request,res:Response) =>{
    console.log(req.body.passionLevel)
    User.findById(
        { _id: req.params.id })
        .exec()
        .then(user => {
            const hobbies = new Hobbies({
                passionLevel:req.body.passionLevel,
                name:req.body.name,
                year:"Since "+req.body.year
            });
            hobbies.save()
                .then(hobby => {
                    console.log(hobby._id);
                    const l:number = user.hobbies.push(hobby._id);

                    user.save()
                        .then((user) => res.status(200).json(user))
                        .catch(err => res.status(400).json('Error while Saving the User: ' + err));
                }
                )
                .catch(err => res.status(400).json('Error Saving the Hobby: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    
}

public fetchUserHobbies =  async (req:Request,res:Response) =>{
   
    try{
    let result = await User.findOne(
        { _id: req.params.id })
        .populate('hobbies')
        .exec();
        if(result){
             
          res.status(200).json(result)
     
        }

    }catch(err){ 
        res.status(400).json('Error: ' + err);
    }
    
}

public deleteUserHobby =  async (req:Request,res:Response) =>{
    
     try{
        let result = await Hobbies.findOneAndDelete(
         { _id: req.params.id })
        
         if(result){
            res.status(200).json(result)
           } else {res.status(500).json('No Hobbies found to be deleted')}        
         }

     catch(err){ 
         res.status(500).json('Error: ' + err);
     }
     
 }


}

export default HobbiesController;