'use strict';

var mean = require('meanio');

var mongoose = require('mongoose'),
    http = require('http'),
	mailer = require('nodemailer'),
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
	// Save lead in db schema	
    var lead = saveLead(req);
	// Save to crm
    post2highrise(lead);
	// mail it
    mailLead(lead);
    res.jsonp(lead);
}

function saveLead(req){
    console.log('saving lead');
    var lead = new Lead(req.body);
    lead.save();
    return lead;
}

function post2highrise(lead){
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

}

function mailLead(lead){
	var transporter = mailer.createTransport(mean.config.clean.mailer);
    var fullName = lead.firstName + ' ' + lead.lastName;
    var mailOptions = {
        from: "MEAN.io leads <contact@linnovate.net>", // sender address
        to: "contact@linnovate.net", // list of receivers
        subject: fullName + ' sent you a lead (sent from MEAN.IO)', // Subject line
        text: fullName + " sent you a lead, call him/her: " + lead.phone + " or email him/her: " + lead.email + " back. " + lead.message , // plaintext body
    };
	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
}
