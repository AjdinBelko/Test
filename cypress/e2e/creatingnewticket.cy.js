describe('Gthub', () => {
    it('creating anew ticket', () => {

      cy.visit('https://github.com/login');

      cy.xpath("//input[@id='login_field']").type('AjdinBelko');
      cy.xpath("//input[@id='password']").type('Belkon123456789')
      cy.xpath("//input[@name='commit']").click();
      
      //navigating to project

      cy.xpath("//div[@class='Header-item position-relative mr-0 d-none d-md-flex']").click();
      cy.xpath("//a[normalize-space()='Your projects']").click();
      cy.xpath("//div[@id='projects-results']//div[2]").contains('Testing').click();

    // creating a new ticket

    cy.xpath("//button[@id='react-aria9767786185-6']//span[@class='Box-sc-1gh2r6s-0 cGrHOt']//*[name()='svg']").click();

    cy.xpath("//div[@id='no_vertical_group']//button[@aria-label='Add item'][normalize-space()='Add item']").click().type('Keno{enter}');
    })


    it('creating anew ticket', () => {
    })
  })

// end of test
