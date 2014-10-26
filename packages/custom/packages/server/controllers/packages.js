'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Package = mongoose.model('_Package'),
    _ = require('lodash');


/**
 * Find a package by id
 */
exports.package = function(req, res, next, id) {
    Package.load(id, function(err, existingPackage) {
        if (err) return next(err);
        if (!existingPackage) return next(new Error('Failed to load package ' + id));
        req.package = existingPackage;
        next();
    });
};


/**
 * Create a package
 */
exports.create = function(req, res) {
    var newPackage = new Package(req.body);

    newPackage.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                package: newPackage
            });
        } else {
            res.jsonp(newPackage);
        }
    });
};


/**
 * Update a package
 */
exports.update = function(req, res) {
    var existingPackage = req.package;

    existingPackage = _.extend(existingPackage, req.body);

    existingPackage.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                package: existingPackage
            });
        } else {
            res.jsonp(existingPackage);
        }
    });
};


/**
 * Show a package
 */
exports.show = function(req, res) {
    res.jsonp(req.package);
};


/**
 * List of Packages
 */
exports.all = function(req, res) {
    Package.find().sort('created').exec(function(err, packages) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(packages);
        }
    });
};
