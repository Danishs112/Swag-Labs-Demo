import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObject/login';
import CommonFile from '../../pageObject/commonFile';
import Decryption from '../../utilities/decryption';

const loginPage = new LoginPage();
const commonFile = new CommonFile();
const decode = new Decryption();


