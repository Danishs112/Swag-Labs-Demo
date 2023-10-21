import loginLocators from '../pages/loginLocators.json';
import WebTextBox from '../helpers/webTextBox';
import WebButton from '../helpers/webButton';


const webTextBox = new WebTextBox();
const webButton = new WebButton();

class CommonFile {
  iEnterValue(element, string) {
    webTextBox.typeText(loginLocators[element], string);
  }

  iCheckedCheckBox(element) {
    webButton.check(loginLocators[element]);
  }
}

export default CommonFile;
