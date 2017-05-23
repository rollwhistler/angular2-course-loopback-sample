var loopback = require('loopback');
var boot = require('loopback-boot');
var log = require('winston');
var app = module.exports = loopback();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    var db = app.dataSources.db;
    var model_names = ['thing'];
    db.autoupdate(model_names, function(err, result) {
        if (err) log.error(err);
        else log.info("migration completed");
        process.exit();
    });
});