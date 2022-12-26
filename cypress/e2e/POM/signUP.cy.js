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
        cy.get('.signup-form').within(() => {
            cy.get('[type="text"]')
                .invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.') // validation HTML info Message
        })
        cy.get('[type="text"]').type(data.name)
    }

    newUserEmail() {

        cy.get('.signup-form').within(() => {
            cy.get('input[data-qa="signup-email"]')
                .type('minhaz@')
                .invoke('prop', 'validationMessage')
                .should('equal', "Please enter a part following '@'. 'minhaz@' is incomplete.") // validation HTML info Message
            cy.get('input[data-qa="signup-email"]').clear()
            cy.get('input[data-qa="signup-email"]')
                .invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
            cy.get('input[data-qa="signup-email"]').type('minhaz')
                .invoke('prop', 'validationMessage')
                .should('equal', "Please include an '@' in the email address. 'minhaz' is missing an '@'.")
            cy.get('input[data-qa="signup-email"]').clear()
        })
        cy.get('input[data-qa="signup-email"]').type(data.email)
    }

    submitCTA() {
        cy.get('button[data-qa="signup-button"]').click()
    }


}

export default signUp