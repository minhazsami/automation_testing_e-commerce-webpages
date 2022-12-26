/// <reference types="Cypress" />

import signUp from "./POM/signUP.cy";
import enterAccountInfo from "./POM/enterAccountInfo";
const signup = new signUp();
const EnterAccountInfo = new enterAccountInfo();


describe('My First Test', () => {
  let data; //closure variable

  before(() => {
    // executes once prior all tests in it block
    cy.fixture('credential').then(function (fdata) {
      data = fdata
    })
  });

  it('Verify the HomePage', () => {

    cy.visit(data.baseUrl)

  });

  it('verify the sign up form', () => {
    cy.visit(data.baseUrl)
    signup.signUpPage()
    signup.newUserName()
    signup.newUserEmail()
    signup.submitCTA()
    EnterAccountInfo.title()
    EnterAccountInfo.name()
  })

})