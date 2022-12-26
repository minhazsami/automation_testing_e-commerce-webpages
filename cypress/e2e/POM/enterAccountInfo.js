class enterAccountInfo {

    title() {
        cy.get('#id_gender1').click()
    }

    name() {
        cy.get('[data-qa="name"]').should('have.value', 'Mohammed Minhaz').and('have.attr', 'required')
    }

}

export default enterAccountInfo