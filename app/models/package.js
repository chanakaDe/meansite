'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Package Schema
 */
var PackageSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
    	type: String,
    	required: true
    },
    author: {
    	type: String,
    	required: true
    },
    description: String,
    summary: {
    	type: String,
    	required: true
    },
    command: String,
    npmlink: String,
    githublink: String,
    rating: String,
    thumbnail: String,
    screenshots: [String],
    price: {
    	type: String,
    	default: 'free'
    }

});

PackageSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Package', PackageSchema);