import express, { Router } from 'express';

import HobbiesController from '../controller/hobbiescontroller';


  
class HobbyRoutes {
    public router = Router();
    public hobbiesController = new HobbiesController();
    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post('/api/addHobby/:id',this.hobbiesController.addHobby);
        this.router.get('/api/fetchUserHobbies/:id', this.hobbiesController.fetchUserHobbies);
        this.router.delete('/api/deleteUserHobby/:id', this.hobbiesController.deleteUserHobby);

    }

}
export default HobbyRoutes;