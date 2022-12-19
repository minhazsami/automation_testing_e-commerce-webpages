/// <reference types="Cypress" />

import signUp from "./POM/signUP.cy"
const signup = new signUp();

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
    signup.signUpPage()
    signup.newUser()

  })

})