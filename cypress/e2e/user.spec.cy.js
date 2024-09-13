import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordFild: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
  dashboardGrid:".orangehrm-dashboard-grid",
  wrongCredentialAlert:"[role='alert']",
  myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField:"[name='firstName']",
  lastNameFild:"[name='lastName']",
  genericField:".oxd-input--active",
  dateFild:"[placeholder='yyyy-dd-mm']",
  dateCloseButton:".--close",
  genericSelector:".oxd-select-text-input",
  natinalitySelector:":nth-child(3) > span",
  submitButton:"[type='submit']",

}

  it.only('User Info Update - Sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFild).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid) 
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.firstNameField).clear().type('firstName')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('LicenceNumber')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type('1983-18-09')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericSelector).eq(0).type('select')
    cy.get(selectorsList.natinalitySelector).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordFild).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
 })
})