import locators from '../pages/locators.json';
import WebTextBox from '../helpers/webTextBox';
import WebButton from '../helpers/webButton';
import WebXpath from '../helpers/webXpath';
import WebElement from '../helpers/webElement';
import GenericActions from '../utilities/genericActions';
import WebSelectBox from '../helpers/webSelectBox';

const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webXpath = new WebXpath();
const genericActions = new GenericActions();
const webElement = new WebElement();
const webSelectBox = new WebSelectBox();

class GenericOperations {
  visit() {
    genericActions.visit();
  }

  iEnterValue(locator, text) {
    webTextBox.typeText(locators[locator], text);
  }

  isTextVisibleXpath(text) {
    webXpath.textVisibleByXpath(text);
  }

  iEnterValueByXpath(locator, word) {
    webXpath.typeTextByXpath(locator, word);
  }

  iClickButton(locator) {
    webButton.click(locators[locator]);
  }

  checkUrl(url) {
    genericActions.checkUrl(url);
  }

  checkVisibility(locator) {
    webElement.elementIsDisplayed(locators[locator]);
  }

  checkInvisibility(locator) {
    webElement.elementIsNotDisplayed(locators[locator]);
  }

  iClickButtonByXpath(text) {
    webXpath.removeTargetAndClickByXpath(text);
  }

  iSelectTextFromDropDown(locator, text) {
    webSelectBox.selectDropDownUsingText(locators[locator], text);
  }
}

export default GenericOperations;
