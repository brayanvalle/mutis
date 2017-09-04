"use strict";

/*includes*/

const express = require('express');
const pug = require('pug');
const parser = require('body-parser');
const restFul = require('express-method-override')('_method');

/*path variables*/

const viewsDir = `${__dirname}/views`;
const publicDir = express.static(`${__dirname}/public`);
const routes = require('./routes/urls');

/*definitions*/

const port = process.env.PORT || 3001;


/* declare app properties*/

let app = express();

app.set('views', viewsDir);
app.set('view engine', 'pug');
app.set('port', port);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.use( restFul );
app.use( publicDir );
app.use( routes );


/*tests*/

app.get('/hola',(req,res)=>
{
   res.status(200).send('<h1>hola</h1>'); 
});

module.exports = app;
