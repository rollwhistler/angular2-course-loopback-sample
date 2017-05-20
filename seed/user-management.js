'use strict';

var Q = require('q');

module.exports = function(app) {

    var db = app.dataSources.db;

    return Q.all([
        Q.ninvoke(db, 'automigrate', 'Role'),
        Q.ninvoke(db, 'automigrate', 'RoleMapping'),
        Q.ninvoke(db, 'automigrate', 'ACL'),
        Q.ninvoke(db, 'automigrate', 'AccessToken'),
        Q.ninvoke(db, 'automigrate', 'User')
    ]);

};