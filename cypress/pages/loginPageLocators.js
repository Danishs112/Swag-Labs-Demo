class LoginPageLocators {
  getHeading() {
    return cy.get('div.page-title h1');
  }

  getSubHeading() {
    return cy.get('div.title strong');
  }

  getEmailField() {
    return cy.get('#Email');
  }
  getPasswordField() {
    return cy.get('#Password');
  }
  getRememberMeCheckBox() {
    return cy.get('#RememberMe');
  }
}

export default LoginPageLocators;

