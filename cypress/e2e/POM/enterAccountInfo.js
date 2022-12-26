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
        cy.get('#years').select('1994').should('have.value', '1994')
    }

    checkBox() {
        cy.get('#newsletter').check()
        cy.get('#optin').check()
    }

    firstName() {
        cy.get('[data-qa="first_name"]').type('Mohammed').should('have.attr', 'required')
    }

    lastName() {
        cy.get('[data-qa="last_name"]').type('Minhaz').should('have.attr', 'required')
    }

    companyName() {
        cy.get('[data-qa="company"]').type('Shop innovation').should('have.value', 'Shop innovation')
    }

    address() {
        cy.get('[data-qa="address"]').type('Dhaka Bangladesh').should('have.attr', 'required')
    }

}

export default enterAccountInfo