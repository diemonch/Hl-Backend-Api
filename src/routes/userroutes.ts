import express, { Router } from 'express';

import UserController from '../controller/usercontroller';


  
class UserRoutes {
    public router = Router();
    public userController = new UserController();
    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post('/api/addUser/',this.userController.addUser);
        this.router.get('/api/fetchUsers', this.userController.fetchUsers)
    }

}
export default UserRoutes;