/// <reference types="Cypress" />

import signUp from "./POM/signUP.cy";
import enterAccountInfo from "./POM/enterAccountInfo";
import login from "./POM/login";
import cart from "./POM/addToCart";

const signup = new signUp();
const EnterAccountInfo = new enterAccountInfo();
const Login = new login();
const AddToCart = new cart();


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

  /*it('verify the sign up form', () => {
    cy.visit(testData.baseUrl)
    signup.signUpPage()
    signup.newUserName()
    signup.newUserEmail()
    signup.submitCTA()
    EnterAccountInfo.title()
    EnterAccountInfo.name()
    EnterAccountInfo.password()
    EnterAccountInfo.DateOfBirth()
    EnterAccountInfo.checkBox()
    EnterAccountInfo.firstName()
    EnterAccountInfo.lastName()
    EnterAccountInfo.companyName()
    EnterAccountInfo.address()
    EnterAccountInfo.state()
    EnterAccountInfo.city()
    EnterAccountInfo.zipCode()
    EnterAccountInfo.mobileNumber()
    EnterAccountInfo.createAccountCTA()
  })*/

  /*it('Verify the Login', () => {
    cy.visit(testData.baseUrl + '/login')
    Login.loginEmailAddress()
    Login.loginPassword()
    Login.loginCTA()

  })*/

  it('Verify the product add to cart', () => {
    cy.visit(testData.baseUrl)
    cy.scrollTo(0, 500)
    AddToCart.product()
    AddToCart.addCart()
    AddToCart.viewCart()
    AddToCart.checkOut()
  })

})