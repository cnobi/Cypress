describe('Test', () => {
  it('To see if a condition passes', () => {
    cy.visit('/')
    cy.get('#APjFqb').type('Cypress typing test')
    cy.get('#APjFqb').should('have.value', 'Cypress typing test')
    cy.get('#APjFqb').clear()
    cy.get('#APjFqb').type('Cypress Automation Basics for dummies')
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.get('.recaptcha-checkbox-border').wait(5000).click()
  })
})