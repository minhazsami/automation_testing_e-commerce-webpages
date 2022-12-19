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

    newUser() {
        cy.get('[type="text"]').type(data.name)
    }

}

export default signUp