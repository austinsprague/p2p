/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , NavPagePo = require('./nav.po');

chai.use(chaiAsPromised);

describe('Nav page', function () {
  var navPage;

  beforeEach(function () {
    navPage = new NavPagePo();
    browser.get('/#/nav');
  });

  it('should say NavCtrl', function () {
    expect(navPage.heading.getText()).to.eventually.equal('nav');
    expect(navPage.text.getText()).to.eventually.equal('NavCtrl');
  });
});
