describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://github.com/login');

      cy.xpath("//input[@id='login_field']").type('AjdinBelko');
      cy.xpath("//input[@id='password']").type('Belkon123456789')
      cy.xpath("//input[@name='commit']").click();

      cy.xpath("//summary[@aria-label='Create new…']//*[name()='svg']").click();
    
      cy.xpath("//button[normalize-space()='New project']").click();
      

      cy.xpath("//button[@class='ButtonBase-sc-bqtwic-0 ButtonPrimary-sc-1awfvt4-0 jjNYXQ jdiPwg']").click();

      cy.xpath("//button[@aria-label='Add new item']").click().type('test123').type('{enter}');

      cy.xpath("//span[@class='Text-sc-125xb1i-0 iejlzf']").contains('test123').click();

      cy.xpath("//button[@aria-label='Edit comment']").click();
      cy.xpath("//div[@class='Box-sc-1gh2r6s-0 gePUkP']").type('123123');

      cy.xpath("//button[@aria-label='Close']//span[@class='Box-sc-1gh2r6s-0 cGrHOt']//*[name()='svg']").click();
      

      cy.xpath("//div[@class='Box-sc-1gh2r6s-0 dRRPge']").click();
      cy.xpath("//div[@data-test-id='view-type-board']").click();



    })

it('creates a new test', () => {

  cy.xpath("//div[@id='47fc9ee4']//button[@aria-label='Add item'][normalize-space()='Add item']").click().type('kenotest{enter}');

})

  })

// end of test


