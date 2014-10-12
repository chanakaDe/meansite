'use strict';

var mean = require('meanio');

var mongoose = require('mongoose'),
    http = require('http'),
    Lead = mongoose.model('Lead');

exports.render = function(req, res) {

  var modules = [];
  // Preparing angular modules list with dependencies
  for (var name in mean.modules) {
    modules.push({
      name: name,
      module: 'mean.' + name,
      angularDependencies: mean.modules[name].angularDependencies
    });
  }

  function isAdmin() {
    return req.user && req.user.roles.indexOf('admin') !== -1;
  }

  // Send some basic starting info to the view
  res.render('index', {
    user: req.user ? {
      name: req.user.name,
      _id: req.user._id,
      username: req.user.username,
      roles: req.user.roles
    } : {},
    modules: modules,
    isAdmin: isAdmin,
    adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
  });
};


/**
 * Create an lead
 */
exports.lead_create = function(req, res) {
    console.log('hello');

    var lead = new Lead(req.body);
    lead.save();

    var path = '/lead/new?key=6dc339490d7476bc0d51c901cef020832ae6f9d6&project_id=leads'
        + '&first_name=' + lead.firstName
        + '&last_name=' + lead.lastName
        + '&phone=' + lead.phone
        + '&email=' + lead.email;

    var options = {
        host: 'dev.linnovate.net',
        port: 80,
        path: path
    };

    http.get(options, function(resp) {
        resp.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    }).on("error", function(e) {
        console.log("Got error: " + e.message);
    });

    // post to HIGHRISE
    var post_data = 'sFirstName=' + lead.firstName
        + '&sLastName=' + lead.lastName
        + '&sPhone=' + lead.phone
        + '&sEmail=' + lead.email
        + '&staff_comment=' + lead.message;
    // An object of options to indicate where to post to
    var post_options = {
        host: 'linnovate.net',
        port: '80',
        path: '/lead-to-highrise',
        //auth: 'linnovate:devel',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length
        }
    };
    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
    // post the data
    //	post_req.write(post_data);
    //	post_req.end();
    console.log('Did not sent to crm');
    // send email
//    var mail = require("nodemailer").mail;
//    var fullName = lead.firstName + ' ' + lead.lastName;
//
//    mail({
//        from: "MEAN.io leads <contact@linnovate.net>", // sender address
//        to: "lior@linnovate.net", // list of receivers
//        subject: fullName + ' sent you a lead (sent from MEAN.IO)', // Subject line
//        text: fullName + " sent you a lead, call him/her: " + lead.phone + " or email him/her: " + lead.email + " back. " + lead.message , // plaintext body
//    });

    res.jsonp(lead);
}
