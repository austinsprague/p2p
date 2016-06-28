/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , CampaignPagePo = require('./campaign.po');

chai.use(chaiAsPromised);

describe('Campaign page', function () {
  var campaignPage;

  beforeEach(function () {
    campaignPage = new CampaignPagePo();
    browser.get('/#/campaign');
  });

  it('should say CampaignCtrl', function () {
    expect(campaignPage.heading.getText()).to.eventually.equal('campaign');
    expect(campaignPage.text.getText()).to.eventually.equal('CampaignCtrl');
  });
});
