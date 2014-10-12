'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Lead Schema
 */

var LeadSchema = new Schema({
  firstName: {type: String, default: '', trim : true},
  lastName: {type: String, default: '', trim : true},
  phone: {type: String, default: '', trim : true},
  name: {type: String, default: '', trim : true},
  message: {type: String, default: '', trim : true},
  email: {type: String, default: '', trim : true},
  created: {type: Date, default: Date.now}
});

mongoose.model('Lead', LeadSchema);