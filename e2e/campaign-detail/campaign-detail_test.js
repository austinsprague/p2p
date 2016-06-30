/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , CampaignDetailPagePo = require('./campaign-detail.po');

chai.use(chaiAsPromised);

describe('Campaign detail page', function () {
  var campaignDetailPage;

  beforeEach(function () {
    campaignDetailPage = new CampaignDetailPagePo();
    browser.get('/#/campaign-detail');
  });

  it('should say CampaignDetailCtrl', function () {
    expect(campaignDetailPage.heading.getText()).to.eventually.equal('campaignDetail');
    expect(campaignDetailPage.text.getText()).to.eventually.equal('CampaignDetailCtrl');
  });
});
