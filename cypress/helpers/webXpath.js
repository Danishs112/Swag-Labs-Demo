class WebXpath {
  setXpathValue(type, word) {
    let xpathString = '';

    if (type === 'name' || type === 'id' || type === 'class') {
      xpathString = `//*[contains(@${type},'${word}')]`;
    } else if (type === 'visibleText') {
      xpathString = `//*[contains(text(),'${word}')]`;
    }

    return xpathString;
  }

  clickByXpath(type, element) {
    const getXpathValue = this.setXpathValue(type, element);
    cy.xpath(getXpathValue).click().then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }

  typeTextByXpath(type, word) {
    const getXpathValue = this.setXpathValue(type, word);
    cy.xpath(getXpathValue).clear().type(word).then(function() {
      cy.log('Typing of the field with value: ' + data);
    }, function(err) {
      cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
    });
  }

  shouldContainTextByXpath(type, text) {
    const getXpathValue = this.setXpathValue(type, text);
    cy.xpath(getXpathValue).should('contain', text).then(function(text) {
      cy.log('The element is have: ' + text);
    }, function(err) {
      cy.log('--->Error: The element dosn\'t have text due to: ' + err);
    });
  }
}

export default WebXpath;
