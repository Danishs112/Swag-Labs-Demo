class WebButton {
  click(element) {
    cy.get(element).click().then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }

  multipleClick(element) {
    cy.get(element).click({multiple: true}).then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }

  focusClick(element) {
    cy.get(element).click({force: true}).then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }

  realclick(element) {
    cy.get(element).realClick().then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }

  check(element) {
    cy.get(element).check().then(function() {
      cy.log('The element got checked');
    }), function(err) {
      cy.log('-->Error: The element couldn\'t get checked due to:'+ err);
    };
  }

  removeTargetAndClick(element) {
    cy.get(element).invoke('removeAttr', 'target').click().then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }
}

export default WebButton;
