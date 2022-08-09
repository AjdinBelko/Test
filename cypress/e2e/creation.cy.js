describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://github.com/login');
  
        cy.xpath("//details[@class='details-overlay details-reset js-feature-preview-indicator-container']").click()


    })
  })

