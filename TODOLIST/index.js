const express = require('express');
const port = 8000;
const app = express();


//use express router
app.use('/' , require('./routers/index'))


//setting view engine as ejs
app.set('view engine','ejs');

//setting path for views directory
app.set('views','./views');

//static file , which is present in assets directory
app.use(express.static('assets'));

const db = require('./config/mongoose');


app.listen(port , (err) => {
    if(err){
        console.log('error in runnig server => ' , err);
    }else{
        console.log(`Yeah :)  my express server is runnig on port : ${port}`)
    }
})