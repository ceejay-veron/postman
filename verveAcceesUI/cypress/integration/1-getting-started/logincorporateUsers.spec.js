/// <reference types="cypress" />


describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin', {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                });
            },
        });
});

    //https://verve-access-customer.k8.isw.la/corporate/signin

    it('should test for url and valid CORPORATE_ADMIN logon', () => {
        cy.title().should('eq', 'Verve Access')
        cy.location('protocol').should('eq', 'https:')
        // /cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'customer')
        cy.reload()
        //cy.hash().should('include', '#/auth')
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('njoku101@qa.team')
            cy.get('input[type="password"]').type('Password1@')
            cy.get('#login').click({timeout : 2000})
            cy.wait(9000)
            //cy.root().submit({timeout : 2000})
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('CORPORATE_ADMIN').should('be.visible')
        cy.get('.red').click()
  
    })

    it('should test for invalid username and valid password for Corporate Admin logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('VBnjoku101@qa.team')
            cy.get('input[type="password"]').type('Password1@')
            cy.get('#login').click().wait(3000)
            //cy.wait(5000)
            //cy.root().submit({timeout : 2000})
            
        })
       
       cy.contains('ERROR!').should('be.visible')
       
    })

    it('should test for valid username and invalid password for Corporate Admin logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('njoku101@qa.team')
            cy.get('input[type="password"]').type('Pass34word1@')
            cy.get('#login').click().wait(5000)
            //cy.wait(5000)
            //cy.root().submit({timeout : 2000})
            
        })
       
       cy.contains('ERROR!').should('be.visible')
       
    })

    it('should test for null username and null password for Corporate Admin logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type(' ')
            cy.get('input[type="password"]').type(' ')
            cy.get('#login').click()
            
            
        })
       
       cy.contains('email cannot be empty!').should('be.visible')
       
    })
//Coporate User

it('should test for url and valid CORPORATE_USER logon', () => {
    

    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('njoku102@qa.team')
        cy.get('input[type="password"]').type('Password1@')
        cy.get('#login').click({timeout : 2000})
        cy.wait(9000)
        //cy.root().submit({timeout : 2000})
        
    })
    cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
    cy.contains('CORPORATE_USER').should('be.visible')
    cy.get('.red').click()

})

it('should test for invalid username and valid password for Corporate User logon', () => {
        
  
    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('VBnjoku102@qa.team')
        cy.get('input[type="password"]').type('Password1@')
        cy.get('#login').click().wait(3000)
        //cy.wait(5000)
        //cy.root().submit({timeout : 2000})
        
    })
   
   cy.contains('ERROR!').should('be.visible')
   
})

it('should test for valid username and invalid password for Corporate user logon', () => {
    

    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('njoku102@qa.team')
        cy.get('input[type="password"]').type('Pass34word1@')
        cy.get('#login').click().wait(5000)
        //cy.wait(5000)
        //cy.root().submit({timeout : 2000})
        
    })
   
   cy.contains('ERROR!').should('be.visible')
   
})

it('should test for null username and null password for Corporate user logon', () => {
    

    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type(' ')
        cy.get('input[type="password"]').type(' ')
        cy.get('#login').click()
        
        
    })
   
   cy.contains('email cannot be empty!').should('be.visible')
   
})


})