/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Document = require('../api/document/document.model');
var User = require('../api/user/user.model');

Document.find({}).remove(function () {
  Document.create({
      FirstName: 'fn1',
      LastName: 'ln1',
      TypeOfCase: 'case1'
    },
    {
      FirstName: 'fn2',
      LastName: 'ln2',
      TypeOfCase: 'case2'
    });
});

User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});
