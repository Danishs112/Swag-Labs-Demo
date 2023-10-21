import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import GenericOperations from '../../pageObject/genericOperations';
import Decryption from '../../utilities/decryption';

import Url from '../../urls/url.json';

const genericOperations = new GenericOperations();
const decode = new Decryption();


Given('I am on the {string} page', function(page) {
  genericOperations.visit();
});

Then('I should see {string} text on the page', function(text) {
  genericOperations.isTextVisibleXpath(text);
});

When('I fill {string} on the {string} input field', function(userName, locator) {
  const decondedUserName = decode.getDecodedString(userName);
  genericOperations.iEnterValue(locator, decondedUserName);
});

When('I click on the {string} on the {string}', function(button, page) {
  genericOperations.iClickButton(button);
});

Then('I should navigate to the {string} page', function(page) {
  const pageUrl = Url[page];
  genericOperations.checkUrl(pageUrl);
});


Then('I should see the {string} on the {string}', function(text, page) {
  genericOperations.checkVisibility(text);
});


Then('I should not see the {string} on the page', function(locator) {
  genericOperations.checkInvisibility(locator);
});

When('I click on the {string} icon on the footer section', function(locator) {
  genericOperations.iClickButtonByXpath(locator);
});

Then('I should see the {string} on the page', function(locator) {

});
