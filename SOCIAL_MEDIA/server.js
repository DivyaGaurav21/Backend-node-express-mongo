const express = require('express');
const port = 8000;
const app = express();


//---------express ejs layout--------------------//
const expressLayouts = require('express-ejs-layouts');

//-----setting up mongodb configuration----------//
const db = require('./config/mongoose');

//---------cookie parser for establish identity on server-------//
// const cookieParser = require('cookie-parser');

//handle form submissions and other types of data sent in the HTTP request body.//
app.use(express.urlencoded({extended:true}));


//----------static file accessing in assets directory----------//
app.use(express.static('./assets'));

//----extract style and script from sub pages intothe layout---//
app.use(expressLayouts);
// app.set('layout extractStyles' , true);
// app.set('layout extractScripts' , true);

//------------------setting view engine as ejs-----------------//
app.set('view engine' , 'ejs');
//setting path for view directory where all ejs file exist
app.set('views' , './views');

//------------tell app to use cookie parser--------------------//
// app.use(cookieParser);

//--middleware for express router(bydefault take index.js)----//
app.use('/', require('./routers'));

app.listen(port , (err) => {
    if(err){
        console.log("error in running in server");
    }else{
        console.log(`Yeah :)) My Express server is running on port ${port}`)
    }
})