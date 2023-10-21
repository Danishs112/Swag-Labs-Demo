class WebTextBox {
  clearText(element) {
    cy.get(element).clear().then(function() {
      cy.log(' Clearing of field !!!');
    }, function(err) {
      cy.log('--->Error: Clearing did not perform due to: ' + err);
    });
  }

  typeText(element, data) {
    cy.log('element', element);
    cy.log('data', data);
    cy.get(element).clear().type(data).then(function() {
      cy.log('Typing of the field with value: ' + data);
    }, function(err) {
      cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
    });
  }

  typeTextWithoutClearingExistingText(element, data) {
    element.type(data).then(function() {
      cy.log('Typing of the field with value: ' + data);
    }, function(err) {
      cy.log(`--->Error: Typing of the field with value: ${data}  
         was not done due to:  + ${err}`);
    });
  }
}

export default WebTextBox;
