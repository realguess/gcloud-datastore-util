// Test
// ====

'use strict';

var expect = require('chai').expect;
var path = require('path');
var main = require('../package.json').main;
var datastore = require(path.join(__dirname, '..', main));

describe('Exports', function () {
  it('Should return exported methods', function () {
    expect(datastore).to.contain.all.keys(['zero']);
  });
});
