import cypress from "cypress";

let data; //closure variable

before(() => {
    // executes once prior all tests in it block
    cy.fixture('credential').then(function (fdata) {
        data = fdata
    })
});

class signUp {


    signUpPage() {
        cy.get('li a[href="/login"]').click()
        cy.url().should('include', '/login')
        return this
    }

    newUserName() {
        cy.get('[type="text"]').type(data.name)
    }

    newUserEmail() {
        cy.get('input[data-qa="signup-email"]').type('minhaz@')
        cy.get('button[data-qa="signup-button"]').click()
        cypress.$0.validationMessage().should('content.text', "Please enter a part following '@'. 'minhaz@' is incomplete.")
    }


}

export default signUp