'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * _Package Schema
 */
var _PackageSchema = new Schema({
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
    readmelink: String,
    npmlink: String,
    githublink: String,
    youtubelink: String,
    rating: String,
    thumbnail: String,
    screenshots: [String],
    price: {
    	type: String,
    	default: 'free'
    }

});

_PackageSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('_Package', _PackageSchema);
