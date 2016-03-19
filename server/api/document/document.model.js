'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({
  Title: String,
  Initials: String,
  LastName:String,
  FirstName:String,
  DateOfBirth: Date,
  NINumber: String,
  Address:String,
  Postcode:String,
  PhoneNumber:String,
  TypeOfCase: String,
  MonthlyIncome: String,
  ChildBenefit: String

});

module.exports = mongoose.model('Document', DocumentSchema);
