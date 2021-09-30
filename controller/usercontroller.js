const User = require('../model/users');
const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../config/config');

const register = (req,res,next) =>{
    bycrpt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({error:err})
        }
        let user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hashedPass
       
        })
            user.save()
            .then(response =>{
                res.json({message:'User has been created' })
            })
            .catch(error =>{
                res.json({
                    message:'Error while creating the user',
                    error:error.message
                    
                })
            })
    })
    
}
const maxTokenAge = 3 * 24 * 60 * 60;
const login = (req,res,next)=>{
    let username=req.body.username
    let password=req.body.password
    User.findOne({email:username})
    .then(user =>{
        if(user){
            bycrpt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({id:user._id},TOKEN_SECRET,{expiresIn:'1h'})
                    res.cookie('jwt',token, { httpOnly: true, maxAge: maxTokenAge * 1000 })
                    res.json({
                        message:'Login Successful',
                        token
                    })
                }else{
                    res.json({
                        message:'Invalid Password'
                    })
                }
            })
        }else{
            res.json({
                message:'No such user is found, Please check the username'
            })
        }

    })
}

module.exports={
    register:register,
    login:login
}