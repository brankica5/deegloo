describe('flask io spec', () => {
  beforeEach(() => {
    cy.visit('https://flask.io/')
  })

  it('can create a new to-do list', () => {
    cy.contains('Create a to-do list')
      .click()

    cy.url().should('eq', 'https://flask.io/new')
  })

  context('with a new to-do list opened', () => {
    beforeEach(() => {
      cy.contains('Create a to-do list')
      .click()
    })

    it('can add a new to-do item to list', () => {
      cy.get('#list_tasks_attributes_0_description')
      .type('get job at deegloo{enter}')

      cy.get('.todo > li')
      .should('have.length', 1)
      .first()
      .children()
      .find('.best_in_place')
      .should('have.attr', 'data-bip-original-content', 'get job at deegloo')
    })
  })
})