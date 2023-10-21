class WebSelectBox {
  selectDropDownUsingText(element, text) {
    element.select(text).then(function() {
      cy.log('--->Success: The ' + text + ' in dropdown got clicked.');
    }, function(err) {
      cy.log('--->Error: The ' + text + ' in dropdown couldn\'t get clicked due to: ' + err);
    });
  }
}

export default WebSelectBox;
