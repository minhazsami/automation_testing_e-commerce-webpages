/// <reference types="Cypress" />

import signUp from "./POM/signUP.cy";
import enterAccountInfo from "./POM/enterAccountInfo";
const signup = new signUp();
const EnterAccountInfo = new enterAccountInfo();


describe('My First Test', () => {
  let testData; //closure variable

  before(() => {
    // executes once prior all tests in it block
    cy.fixture('credential').then(function (fdata) {
      testData = fdata
    })
  });

  it('Verify the HomePage', () => {

    cy.visit(testData.baseUrl)

  });

  it('verify the sign up form', () => {
    cy.visit(testData.baseUrl)
    signup.signUpPage()
    signup.newUserName()
    signup.newUserEmail()
    signup.submitCTA()
    EnterAccountInfo.title()
    EnterAccountInfo.name()
    EnterAccountInfo.password()
    EnterAccountInfo.DateOfBirth()
  })

})