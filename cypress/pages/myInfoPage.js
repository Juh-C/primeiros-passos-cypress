class MyInfoPage {

    selectorsList(){ 
     const selectors = {
        firstNameField:"[name='firstName']",
        lastNameField:"[name='lastName']",
        genericField:".oxd-input--active",
        dateFild:"[placeholder='yyyy-dd-mm']",
        dateCloseButton:".--close",
        genericSelector:".oxd-select-text-input",
        natinalitySelector:":nth-child(3) > span",
        submitButton:"[type='submit']",
       
     }

       return selectors
  }

    fillPersonalDetails(firstName, lastName, nickName){
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    //cy.get(this.selectorsList().genericField).eq(2).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, licenceNumber, licenceDate){
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(licenceNumber)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(licenceDate)
    cy.get(this.selectorsList().dateCloseButton).click()
}    
    fillStatus(comboBoxDate, comboBoxSelect){
    cy.get(this.selectorsList().genericField).eq(7).clear().type(comboBoxDate)
    cy.get(this.selectorsList().dateCloseButton).click()
    cy.get(this.selectorsList().genericSelector).eq(0).type(comboBoxSelect)
    cy.get(this.selectorsList().natinalitySelector).click() 
}

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('.oxd-toast-close') 
    }
    
    
}


export default MyInfoPage