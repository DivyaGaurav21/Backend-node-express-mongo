const express = require('express');
// const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/users_controller')
// router.get('/profile', passport.checkAuthentication ,userController.profile)


router.get('/sign-up' , userController.signUp);
router.get('/sign-in', userController.signIn);

// router.get('/sign-out' , userController.signOut)

router.post('/create', userController.create);

// use passport as a middleware to authenticate 
// router.post('/create-session' , userController.createSession);

module.exports = router;
