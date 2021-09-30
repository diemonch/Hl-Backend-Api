const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controller/usercontroller');

// Register and Login
router.post('/api/register/', AuthenticationController.register);
router.post('/api/login/',AuthenticationController.login);

module.exports=router;