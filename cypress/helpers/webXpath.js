class WebXpath {
  setXpathValue(word, locatorType) {
    let xpathString = '';

    if (locatorType === 'visibleText') {
      xpathString = `//*[contains(text(),'${word}')]`;
    } else {
      xpathString = `//*[@${locatorType}='${word}']`;
    }

    return xpathString;
  }

  removeTargetAndClickByXpath(element, locatorType = 'visibleText') {
    const getXpathValue = this.setXpathValue(element, locatorType);
    cy.xpath(getXpathValue).invoke('removeAttr', 'target').click()
        .then(
            function() {
              cy.log('The element got clicked.');
            },
            function(err) {
              cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
            },
        );
  }

  typeTextByXpath(locatorType, word) {
    const getXpathValue = this.setXpathValue(locatorType, word);
    cy.xpath(getXpathValue)
        .clear()
        .type(word)
        .then(
            function() {
              cy.log('Typing of the field with value: ' + data);
            },
            function(err) {
              cy.log(
                  '--->Error: Typing of the field with value:' +
              data +
              ' was not done due to: ' +
              err,
              );
            },
        );
  }

  textVisibleByXpath(text, locatorType = 'visibleText') {
    const getXpathValue = this.setXpathValue(text, locatorType);
    cy.xpath(getXpathValue)
        .should('be.visible')
        .then(
            function(text) {
              cy.log('The element is have: ' + text);
            },
            function(err) {
              cy.log('--->Error: The element dosn\'t have text due to: ' + err);
            },
        );
  }
}

export default WebXpath;
