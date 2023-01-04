class cart {

    product() {
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo').trigger('mouseover')
    }
    addCart() {
        cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a').click({ force: true })
    }

    viewCart() {
        cy.get('.modal-content').contains('View Cart', { matchCase: false }).click()
        cy.url().should('include', 'view_cart')
    }

    checkOut() {
        cy.get('.check_out').click()
    }

}

export default cart