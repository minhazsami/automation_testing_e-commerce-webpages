let testData; //closure variable

before(() => {
    // executes once prior all tests in it block
    cy.fixture('credential').then(function (fdata) {
        testData = fdata
    })
});

class enterAccountInfo {

    title() {
        cy.get('#id_gender1').click()
    }

    name() {
        cy.get('[data-qa="name"]').should('have.value', 'Mohammed Minhaz').and('have.attr', 'required')
    }

    email() {
        cy.get('[data-qa="email"]')
            .should('have.value', 'minhaz.test@gmail.com')
            .and('have.attr', 'disabled')
    }

    password() {
        cy.get('[data-qa="password"]')
            .invoke('prop', "validationMessage").should('equal', 'Please fill out this field.')

        cy.get('[data-qa="password"]').type(testData.password)
    }

    DateOfBirth() {
        cy.get('#days').select(19)
        cy.get('#months').select('July')
        cy.get('#years').select(1994, '1994')
    }

}

export default enterAccountInfo