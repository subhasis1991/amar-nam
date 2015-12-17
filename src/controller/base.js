var routes = require('./../routes/index');
var users = require('./../routes/users');


module.exports.attatch = function(app) {
    app.use('/', routes);
    app.use('/users', users);
}