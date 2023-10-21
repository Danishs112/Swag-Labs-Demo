import GenericActions from '../utilities/genericActions';
import WebText from '../helpers/webText';
import Decryption from '../utilities/decryption';
import WebTextBox from '../helpers/webTextBox';
import WebButton from '../helpers/webButton';
import WebXpath from '../helpers/webXpath';

const generic = new GenericActions();
const webText = new WebText();
const decode = new Decryption();
const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webXpath = new WebXpath();

class LoginPage {
  visit() {
    generic.visit();
  }
}

export default LoginPage;
