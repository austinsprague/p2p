/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , ProfilePagePo = require('./profile.po');

chai.use(chaiAsPromised);

describe('Profile page', function () {
  var profilePage;

  beforeEach(function () {
    profilePage = new ProfilePagePo();
    browser.get('/#/profile');
  });

  it('should say ProfileCtrl', function () {
    expect(profilePage.heading.getText()).to.eventually.equal('profile');
    expect(profilePage.text.getText()).to.eventually.equal('ProfileCtrl');
  });
});
