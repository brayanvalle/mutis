"use strict";

const userModel = require('../models/user');
const communityModel = require('../models/community');
const user = new userModel();

class Paths
{
    registration( req, res, next )
    {
        res.render('registration', {title: 'Registro'});
    }
    
    registerComunity( req, res, next )
    {
        let comunity = {
			_id: (req.body._id || null),
			orgName: req.body.orgName,
			admUsr: req.body.admName,
		};
		
		console.log(comunity);   
        
        res.render('registration',comunity);
    }
    
    registerUser( req, res, next )
    {
        let newUser = 
        {
			_id: (req.body._id || null),
			usrName: req.body.usrName,
			usrNick: req.body.usrNick,
			usrEmail: req.body.usrEmail,
            usrPass: req.body.usrPass
		};
		
		  
        user.register(newUser,(state) =>
        {
            console.log(state);
           if(state)
           {
                console.log("USER ADDED");  
                res.render('logged',newUser);
           }else
           {
               console.log("USER FAILED"); 
                res.render('registration',{error: "user couln't be added"})  
            }
        });
        
    }
    
    login(req, res, next)
    {
        
    }
    
     userInfo(req, res, next)
    {
        
    }
    
    users(req,res,next)
    {
        user.getAll((users)=>
        {
           res.status(200).send(users);
            
        });
    }
}

module.exports = Paths;
