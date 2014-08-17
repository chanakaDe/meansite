/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	http = require('http'),
	Lead = mongoose.model('Lead');

	/**
	 * Create an lead
	 */
	exports.create = function(req, res) {
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
		var mail = require("nodemailer").mail;
		var fullName = lead.firstName + ' ' + lead.lastName;

		mail({
		    from: "MEAN.io leads <contact@linnovate.net>", // sender address
		    to: "lior@linnovate.net", // list of receivers
		    subject: fullName + ' sent you a lead (sent from MEAN.IO)', // Subject line
		    text: fullName + " sent you a lead, call him/her: " + lead.phone + " or email him/her: " + lead.email + " back. " + lead.message , // plaintext body
		});

		res.jsonp(lead);
	}
