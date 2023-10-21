import loginLocators from '../pages/loginLocators.json';
import WebTextBox from '../helpers/webTextBox';
import WebButton from '../helpers/webButton';
import WebXpath from '../helpers/webXpath';
import GenericActions from '../utilities/genericActions';

const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webXpath = new WebXpath();
const genericActions = new GenericActions();

class CommonFile {
  iEnterValue(locator, text) {
    webTextBox.typeText(loginLocators[locator], text);
  }

  isTextVisibleXpath(text) {
    webXpath.textVisibleByXpath(text);
  }

  iEnterValueByXpath(locator, word) {
    webXpath.typeTextByXpath(locator, word);
  }

  iClickButton(locator) {
    webButton.click(loginLocators[locator]);
  }

  checkUrl(url) {
    genericActions.checkUrl(url);
  }
}

export default CommonFile;
