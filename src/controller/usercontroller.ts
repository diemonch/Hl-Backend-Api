import {Request, Response } from  'express';
import { Document } from 'mongoose';
import User,{IUser} from  '../model/users';

class UserController{
public addUser = async (req:Request,res:Response) =>{
    console.log(req.body.name)
    try{

        let user = new User({
            name:req.body.name,
            
        })
        let result: IUser & Document<any, any, any> & {
            _id: any;
        } = await user.save()
        
        if(result){
            res.status(201).json('User Created')
        }   
            
    }catch(err){
        res.status(404).json(err.errors.name.message)
    }
   
    
}


public fetchUsers = async (req:Request,res:Response) =>{
  
    try{

        
        //let userid = req.body.userid
     
        let result:(IUser & Document<any, any, any> & {
            _id: any;
        })[] = await User.find()
        if(result){
           
            const userList:{[index:string]:any}={};
            result.forEach(function(user){
                userList[user._id]=user.name
            })
            

            res.status(200).json(userList)
        }
            
    }catch(err){

        res.status(404).json('unable to find the user'+err)
    }
   
    
}


}

export default UserController;
    


