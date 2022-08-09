describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://github.com/login');

    cy.xpath("//input[@id='login_field']").type('AjdinBelko');
    cy.xpath("//input[@id='password']").type('Belkon123456789')
    cy.xpath("//input[@name='commit']").click();


    cy.xpath("//details[@class='details-overlay details-reset js-feature-preview-indicator-container']").click();
    cy.xpath("//a[normalize-space()='Your repositories']").click();

    cy.xpath("//a[normalize-space()='Flask.io-Automation']").contains('Flask.io').click();
    cy.xpath("//summary[@class='btn-primary btn']").click();
    cy.xpath("//clipboard-copy[@value='https://github.com/AjdinBelko/Flask.io-Automation.git']").click();

    })
  })



