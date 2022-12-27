let testData; //closure variable

before(() => {
    // executes once prior all tests in it block
    cy.fixture('credential').then(function (fdata) {
        testData = fdata
    })
});

class login {

    loginEmailAddress() {
        cy.get('.login-form').within(() => {
            cy.get('[data-qa="login-email"]')
                .invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')

            cy.get('[data-qa="login-email"]').type('minhaz')
                .invoke('prop', 'validationMessage')
                .should('equal', "Please include an '@' in the email address. 'minhaz' is missing an '@'.")
            cy.get('[data-qa="login-email"]').clear().type('minhaz@')
                .invoke('prop', 'validationMessage')
                .should('equal', "Please enter a part following '@'. 'minhaz@' is incomplete.")

        })// validation HTML info Message

        cy.get('[data-qa="login-email"]').type(testData.email)
    }

    loginPassword() {
        cy.get('.login-form').within(() => {
            cy.get('[data-qa="login-password"]')
                .invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        })
    }

}

export default login