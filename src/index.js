const express = require('express');
const bp = require('body-parser');
const signup = require('../controllers/signup');
const login = require('../controllers/login');
const auth = require('../middlewares/auth');
const errh = require('../middlewares/error_handler');
const red = require('../controllers/redirects');
const cors =  require('../middlewares/cors');
const path = require ('path');
const app = express();

//Middlewares
app.use(cors);
app.use(bp.json());
app.use('/api',auth);
app.use(express.static(path.resolve(__dirname,'../public')))
//Routes
app.use(signup);
app.use(login);
app.use(red);



app.use(errh);
const _port = process.env.PORT || 4000;
app.listen(_port,()=>{
    console.log(`application listening on port: ${_port}`)
});