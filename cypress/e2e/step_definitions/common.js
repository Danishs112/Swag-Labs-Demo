import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObject/login';
import CommonFile from '../../pageObject/commonFile';
import Decryption from '../../utilities/decryption';
import Url from '../../urls/url.json';

const loginPage = new LoginPage();
const genericOperation = new CommonFile();
const decode = new Decryption();


Given('I am on the {string} page', function(page) {
  loginPage.visit();
});

Then('I should see {string} text on the page', function(text) {
  genericOperation.isTextVisibleXpath(text);
});

When('I fill {string} on the {string} input field', function(userName, locator) {
  const decondedUserName = decode.getDecodedString(userName);
  genericOperation.iEnterValue(locator, decondedUserName);
});

When('I click on the {string} button on the page', function(button) {
  genericOperation.iClickButton(button);
});

Then('I should navigate to the {string} page', function(page) {
  const pageUrl = Url[page];
  genericOperation.checkUrl(pageUrl);
});

