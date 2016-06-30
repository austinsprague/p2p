/* global element, by */
'use strict';

function CheckoutPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = CheckoutPage;
