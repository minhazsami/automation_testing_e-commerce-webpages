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
        //cy.get('input[data-qa="signup-email"]').type('minhaz@').then()
        cy.get('.signup-form').within(() => {
            cy.get('input[data-qa="signup-email"]').type('minhaz@').invoke('prop', 'validationMessage').should('equal', "Please enter a part following '@'. 'minhaz@' is incomplete.")
        })
        //cy.get('button[data-qa="signup-button"]').click()
    }


}

export default signUp