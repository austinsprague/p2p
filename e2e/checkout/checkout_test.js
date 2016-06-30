/* global describe, beforeEach, it, browser */
'use strict';

var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect
  , CheckoutPagePo = require('./checkout.po');

chai.use(chaiAsPromised);

describe('Checkout page', function () {
  var checkoutPage;

  beforeEach(function () {
    checkoutPage = new CheckoutPagePo();
    browser.get('/#/checkout');
  });

  it('should say CheckoutCtrl', function () {
    expect(checkoutPage.heading.getText()).to.eventually.equal('checkout');
    expect(checkoutPage.text.getText()).to.eventually.equal('CheckoutCtrl');
  });
});
