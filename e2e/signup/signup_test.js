/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , SignupPagePo = require('./signup.po');

chai.use(chaiAsPromised);

describe('Signup page', function () {
  var signupPage;

  beforeEach(function () {
    signupPage = new SignupPagePo();
    browser.get('/#/signup');
  });

  it('should say SignupCtrl', function () {
    expect(signupPage.heading.getText()).to.eventually.equal('signup');
    expect(signupPage.text.getText()).to.eventually.equal('SignupCtrl');
  });
});
