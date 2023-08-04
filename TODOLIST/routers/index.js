
const express = require('express');
//setup express router
const router = express.Router();

//controller for routing 
const homeController = require('../controllers/home_controller')

//check whether router is loaded or not
// console.log('router loaded')

//route of home page 
router.get('/' , homeController.home);

router.use('/action' , require('./action'));


module.exports = router ;