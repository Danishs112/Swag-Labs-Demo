import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import GenericOperations from '../../pageObject/genericOperations';
import Decryption from '../../utilities/decryption';

const genericOperations = new GenericOperations();
const decode = new Decryption();
const decondedUserName = decode.getDecodedString('validUsername');
const decodedPassword = decode.getDecodedString('validPassword');

Given('I login into dashboard page', function() {
  genericOperations.visit();
  genericOperations.iEnterValue('username', decondedUserName);
  genericOperations.iEnterValue('password', decodedPassword);
  genericOperations.iClickButton('Login button');
});
