/// <reference types="cypress" />


describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    })
  
    it('should test for url and valid VERVE USER logon', () => {
        cy.title().should('eq', 'Verve Access')
        cy.location('protocol').should('eq', 'https:')
        // /cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'admin')
        cy.reload()
        //cy.hash().should('include', '#/auth')
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('phoenix.shed-okara@interswitchgroup.com')
            cy.get('input[type="password"]').type('Mixmax$500')
            cy.get('#login').click({timeout : 2000})
            cy.wait(18000)
            //cy.root().submit({timeout : 2000})
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE_USER').should('be.visible')
        cy.get('.red').click()
  
    })

    it('should test for invalid username and valid password for VERVE USER logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('phoenix.shed-okara@interswitchgroup.com')
            cy.get('input[type="password"]').type('Mix1234max$500')
            cy.get('#login').click().wait(7000)
            //cy.wait(5000)
            //cy.root().submit({timeout : 2000})
            
        })
       
       cy.contains('ERROR!').should('be.visible')
       
    })

    it('should test for valid username and invalid password for VERVE USER logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('Zero@interswitchgroup.com')
            cy.get('input[type="password"]').type('Mixmax$500')
            cy.get('#login').click()
            
            
        })
       
       cy.contains('ERROR!').should('be.visible')
       
    })


    it('should test for null username and null password for VERVE USER logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type(' ')
            cy.get('input[type="password"]').type(' ')
            cy.get('#login').click()
            
            
        })
       
       cy.contains('email cannot be empty!').should('be.visible')
       
    })
  
    it('should test for Valid username and Valid password for VERVE Admin logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('chijioke.njoku@interswitchgroup.com')
            cy.get('input[type="password"]').type('Intersw1+ch@12')
            cy.get('#login').click({timeout : 2000})
            cy.wait(10000)
            
            
        })
       
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE_ADMIN').should('be.visible')
        cy.get('.red').click()
       
    })

    it('should test for null username and null password for VERVE ADMIN logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type(' ')
            cy.get('input[type="password"]').type(' ')
            cy.get('#login').click()
            
            
        })
       
       cy.contains('email cannot be empty!').should('be.visible')
       
    })

    it('should test for invalid username and Valid password for VERVE ADMIN logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('chijioke.njoku345@interswitchgroup.com')
            cy.get('input[type="password"]').type('Intersw1+ch@12')
            cy.get('#login').click()
            
            
        })
       
       cy.contains('ERROR!').should('be.visible')
       
    })

    it('should test for Valid username and invalid password for VERVE ADMIN logon', () => {
        
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('chijioke.njoku@interswitchgroup.com')
            cy.get('input[type="password"]').type('Intersw1+ch@120000')
            cy.get('#login').click().wait(7000)
            
            
        })
       
       cy.contains('ERROR!').should('be.visible')
       
    })
    
    
 /* 
    it('Should test login with empty field', () => {
  
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type(' ')
            cy.get('input[type="Password"]').type(' ')
            cy.root().submit()
        })
  
        cy.contains('This field is required', { timeout: 10000 }).should("be.visible")
        cy.reload()
    })
  
  
  */
  
  })
  