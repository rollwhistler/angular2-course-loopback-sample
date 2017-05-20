'use strict';

var log = require('winston');
var Q = require('q');

module.exports = function(app) {

    return createAdminUsers();

    function createAdminUsers() {

        var User = app.models.User;
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;

        var json = require('./data/admins.json');
        var admins = json.admins;

        return Q.ninvoke(Role, 'create', { name: 'admin' })
            .then(function(adminRole) {

                return admins.reduce(function(memo, data) {
                        return memo.then(function(count) {
                            return createAdmin(data, adminRole)
                                .then(function() {
                                    return count + 1;
                                });
                        })
                    }, Q(0))
                    .then(function(count) {
                        log.info('Inserted %d admins', count);
                    });

                function createAdmin(data, adminRole) {

                    return Q.ninvoke(User, 'create', data)
                        .then(function(user) {
                            return [
                                user,
                                Q.ninvoke(RoleMapping, 'create', {
                                    principalType: RoleMapping.USER,
                                    principalId: user.id,
                                    roleId: adminRole.id
                                })
                            ]
                        });

                }

            });


    }

};