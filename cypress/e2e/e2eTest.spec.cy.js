/// <reference types="cypress" />

import signUp from "./POM/signUP.cy";
const singup = new signUp();

describe('My First Test', () => {
    let data; //closure variable

    before(() => {
        // executes once prior all tests in it block
        cy.fixture('credential').then(function (data) {
            data = data
        })
    });
    it('Verify the HomePage', () => {

        cy.visit('https://shopthearea.netlify.app/')
    })
})