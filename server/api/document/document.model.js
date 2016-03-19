'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({

  LastName:String,
  FirstName:String,
  DateOfBirth: Date,
  NINumber: String,
  Address:String,
  Postcode:String,
  City:String,
  Country: String,
  PhoneNumber:String,
  Salary: String,
  Sex: String,
  NrOfChildren: Number,
  TypeOfCase: String,
  Description: String,
  ExtraInfo: String

});

module.exports = mongoose.model('Document', DocumentSchema);
