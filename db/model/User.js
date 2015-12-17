var user_schema = require('./../schema/UserSchema');
var mongoose = require('mongoose');

//crete a user
var User = mongoose.model('User',user_schema);

var create = function(callback){
    
    var user = new User({
        title: "bubub",
        author: "bubun",
        reader: "bubun"
    })

    user.save(callback(err)); 
};





module.exports = {
    create : create
}