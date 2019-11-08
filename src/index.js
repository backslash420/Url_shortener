const express = require('express');
const bp = require('body-parser');
const signup = require('../controllers/signup')

const app = express();

//Middlewares
app.use(bp.json());

//Routes
app.use(signup);

const _port = process.env.PORT || 4000;
app.listen(_port,()=>{
    console.log(`application listening on port: ${_port}`)
});