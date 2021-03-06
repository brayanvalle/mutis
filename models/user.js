"use strict";
 
const mongoose = require('./db');
const schema = mongoose.Schema;

const userSchema = new schema(
{
    _id : schema.Types.ObjectId,
    usrNick: String,
    usrName: String,
    usrEmail: String,
    usrPass: String
    
});

const user = mongoose.model('User',userSchema);


class userModel
{
    getAll(cb) //cb callback
    {
        user.find({}, (err,docs)=>
        {
           if(err) throw err;
           cb(docs); 
        });
    }
    
    getOne(_id,cb)
    {
        user.findOne({_id : _id}, (err, docs) => 
        {
           if(err) throw err;
            cb(docs);
            
        });
    }
    
    register(data, cb)
    {
        user.count({usrNick: data.usrNick}, (err, count) =>
        {
            if(count == 0)
            {
                user.create(data, (err)=>
                {
                    if(err) throw err;
                    cb(true);       
                });                
            }else cb(false);
            
            
        });
    }
    
    
}


module.exports = userModel;
