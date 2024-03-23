/// <reference types="cypress" />

// using POM

import Login from "../../POM/loginpage.js"


describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // ok
      cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
    })

      //https://verve-access-customer.k8.isw.la/corporate/signin

    it('should test for url and valid CORPORATE_ADMIN logon', () => {
        cy.title().should('eq', 'Verve Access')
        cy.location('protocol').should('eq', 'https:')
        // /cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'customer')
        cy.reload({timeout : 130000})
        //cy.hash().should('include', '#/auth')
  
        cy.get('form').within(($form) => {
            const ln=new Login();
            ln.setUserName(Cypress.env('username1'))
            ln.setPassword(Cypress.env('password1'))
            ln.clickSubmit();
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('CORPORATE_ADMIN').should('be.visible')
        cy.get('.red').click()
  
    })

    it('should test for invalid username and valid password for Corporate Admin logon', () => {
        
  
       const ln=new Login();
       ln.setUserName(Cypress.env('username1') + 'sdg')
       ln.setPassword(Cypress.env('password1'))
       ln.clickSubmit2();
       cy.contains('ERROR!').should('be.visible')
            

       
    })
    it('should test for invalid username and valid password for Corporate Admin logon', () => {
        
  
        const ln=new Login();
        ln.setUserName(Cypress.env('username3')+ 'sdg')
        ln.setPassword(Cypress.env('password1'))
        ln.clickSubmit2();
        cy.contains('ERROR!').should('be.visible')
             
        
     })


    

    it('should test for valid username and invalid password for Corporate Admin logon', () => {
        
  

        const ln=new Login();
       ln.setUserName(Cypress.env('username1'))
       ln.setPassword(Cypress.env('password1')+ 'sdg')
       ln.clickSubmit2();
       cy.contains('ERROR!').should('be.visible')

       
    })

    it('should test for null username and null password for Corporate Admin logon', () => {
        
  
        const ln=new Login();
        ln.setUserName(" ")
        ln.setPassword(" ")
        ln.clickSubmit2();
       
       cy.contains('email cannot be empty!').should('be.visible')
       
    })
    //Coporate User

it('should test for url and valid CORPORATE_USER logon', () => {
    

    cy.get('form').within(($form) => {
        const ln=new Login();
            ln.setUserName(Cypress.env('username4'))
            ln.setPassword(Cypress.env('password4'))
            ln.clickSubmit();
        
    })
    cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
    cy.contains('CORPORATE_USER').should('be.visible')
    cy.get('.red').click()
    

})

it('should test for invalid username and valid password for Corporate User logon', () => {
        
  
    const ln=new Login();
       ln.setUserName(Cypress.env('username3'))
       ln.setPassword(Cypress.env('password1'))
       ln.clickSubmit2();
       cy.contains('ERROR!').should('be.visible')

   
})

it('should test for valid username and invalid password for Corporate user logon', () => {
    

    const ln=new Login();
    ln.setUserName(Cypress.env('username4'))
    ln.setPassword(Cypress.env('password1') + 'fgt')
    ln.clickSubmit2();
    cy.contains('ERROR!').should('be.visible')
   
})

it('should test for null username and null password for Corporate user logon', () => {
    

    const ln=new Login();
    ln.setUserName(" ")
    ln.setPassword(" ")
    ln.clickSubmit2();
    cy.contains('password cannot be empty!').should('be.visible')

    cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
   
})




})