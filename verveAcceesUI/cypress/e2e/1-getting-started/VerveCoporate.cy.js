/// <reference types="cypress" />

// using POM
import Login from "../../POM/loginpage.js"
import ChipType from "../../POM/chiptype.js"
import  RandomNumber from "../../pom/Random.js"
import  institution from "../../pom/institution.js"
import  Artwork from "../../pom/artwork.js"
import  whitelistCards from "../../pom/whitelistCards.js"
import Users from "../../pom/users.js"
import Cards from "../../pom/cards.js"
import department from "../../pom/Department.js"
import userP from "../../pom/userPermission.js"
import UserP from "../../pom/userPermission.js"





describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // ok
      cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    })

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ct=new ChipType();
    const ln=new Login();
    const is=new institution();
    const Aw=new Artwork();
    const Wc=new whitelistCards();
    const Us=new Users();
    const Cs=new Cards();
    const dp=new department();
    const Up=new UserP();


    

    it('should test for url, Navigate to Chiptype Page and add chiptype', () => {
        cy.title().should('eq', 'Verve Access')
        cy.location('protocol').should('eq', 'https:')
        // /cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'admin')
        cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE ADMIN').should('be.visible')
        //cy.get('.red').click()

        ct.setGoToChipTypePage();
        cy.url().should('include', 'admin/chiptypes')
        cy.contains('Chip Types').should('be.visible')

        ct.setAddChipButton();
        ct.setCardType(varTest.test)
        ct.setCardMan(varTest2.newtest)
        ct.setChipprod(varTest2.testname)
        ct.setDate('28/09/2023')
        ct.setSubmitbutton()
        ct.setsuccessMessage()
        cy.wait(6000)


        //should not add existing chiptype
        ct.setAddChipButton()
        ct.setCardType(varTest.test)
        ct.setCardMan(varTest2.newtest)
        ct.setChipprod(varTest2.testname)
        ct.setDate('28/09/2023')
        ct.setSubmitbutton()
        ct.setErrorMessage1()
        cy.wait(6000)
        ct.setclose()


        //should not adding any chiptype dtails
        ct.setAddChipButton(' ')
        ct.setCardType(' ')
        ct.setCardMan(' ')
        ct.setChipprod(' ')
        ct.setSubmitbutton()
        ct.setErrorMessage2()
        ct.setErrorMessage3()
        ct.setErrorMessage4()
        cy.wait(6000)
        ct.setclose()

        //should not add chiptype without Card type
        ct.setAddChipButton();
        ct.setCardType(' ')
        ct.setCardMan(varTest2.newtest)
        ct.setChipprod(varTest2.testname)
        ct.setDate('28/09/2023')
        ct.setSubmitbutton()
        ct.setErrorMessage2()
        cy.wait(6000)
        ct.setclose()


          //should not add chiptype without Card man
          ct.setAddChipButton();
          ct.setCardType(varTest.test)
          ct.setCardMan(' ')
          ct.setChipprod(varTest2.testname)
          ct.setDate('28/09/2023')
          ct.setSubmitbutton()
          ct.setErrorMessage3()
          cy.wait(6000)
          ct.setclose()

          //should not add chiptype without Card man
          ct.setAddChipButton();
          ct.setCardType(varTest.test)
          ct.setCardMan(varTest2.newtest)
          ct.setChipprod(' ')
          ct.setDate('28/09/2023')
          ct.setSubmitbutton()
          ct.setErrorMessage4()
          cy.wait(6000)
          ct.setclose()


           //should not add chiptype without expiry date
           ct.setAddChipButton();
           ct.setCardType(varTest.test)
           ct.setCardMan(varTest2.newtest)
           ct.setChipprod(varTest2.testname)
           ct.setDate(' ')
           ct.setSubmitbutton()
           ct.setErrorMessage5()
           cy.wait(6000)
           ct.setclose()

           //Table header should contain Name Card Type, Card Manufacturer, Chip Product, Expiry Date and  Action
           cy.contains('Card Type').should('be.visible')
           cy.contains('Card Manufacturer').should('be.visible')
           cy.contains('Chip Product').should('be.visible')
           cy.contains('Expiry Date').should('be.visible')
           cy.contains('Action').should('be.visible')
           cy.contains('Active').should('be.visible')



        

    })

    it('should Navigate to inactive tab', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      cy.wait(3000)
      cy.contains('Card Type').should('be.visible')
      cy.contains('Card Manufacturer').should('be.visible')
      cy.contains('Chip Product').should('be.visible')
      cy.contains('Expiry Date').should('be.visible')
      cy.contains('Inactive').should('be.visible')
        
     })

     /*it('should edit chip type ', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      //should not edit chip type without Cardtype

      ct.setGoToChipTypePage();
      ct.setpickChiptype()
      ct.setEditCardType(' ')
      ct.setEditCardMan(varTest2.newtest)
      ct.setEditCardproduct(varTest2.testname)
      ct.setEditExDate('28/03/2023')
      ct.setEditUpdateButton()
      ct.setErrorMessage2()
      cy.wait(6000)
      ct.setclose()

       //should not edit chip type without Card manufacturing
      
       ct.setGoToChipTypePage();
       ct.setpickChiptype()
       ct.setEditCardType(varTest.test)
       ct.setEditCardMan(' ')
       ct.setEditCardproduct(varTest2.testname)
       ct.setEditExDate('28/03/2023')
       ct.setEditUpdateButton()
       ct.setErrorMessage3()
       cy.wait(6000)
       ct.setclose()

       //should not edit chip type without Card product
      
       ct.setGoToChipTypePage();
       ct.setpickChiptype()
       ct.setEditCardType(varTest.test)
       ct.setEditCardMan(varTest2.newtest)
       ct.setEditCardproduct(' ')
       ct.setEditExDate('28/03/2023')
       ct.setEditUpdateButton()
       ct.setErrorMessage4()
       cy.wait(6000)
       ct.setclose()

       

       //should not edit chip type without Any details
      
       ct.setGoToChipTypePage();
       ct.setpickChiptype()
       ct.setEditCardType(' ')
       ct.setEditCardMan(' ')
       ct.setEditCardproduct(' ')
       ct.setEditExDate(' ')
       ct.setEditUpdateButton()
       ct.setErrorMessage2()
       ct.setErrorMessage3()
       ct.setErrorMessage4()
       cy.wait(6000)
       ct.setclose()


        //should edit chip type 'Card type'
      
        ct.setGoToChipTypePage();
        ct.setpickChiptype()
        ct.setEditCardType(varTest.test  + 'th3')
        ct.setEditCardMan(varTest2.newtest)
        ct.setEditCardproduct(varTest2.testname)
        ct.setEditExDate('28/03/2023')
        ct.setEditUpdateButton()
        ct.setsuccessMessage2()
        cy.wait(3000)

        //should edit chip type 'Card Man'
      
        ct.setGoToChipTypePage();
        ct.setpickChiptype()
        ct.setEditCardType(varTest.test)
        ct.setEditCardMan(varTest2.newtest + 'new')
        ct.setEditCardproduct(varTest2.testname)
        ct.setEditExDate('28/03/2023')
        ct.setEditUpdateButton()
        ct.setsuccessMessage2()
        cy.wait(3000)

          //should edit chip type 'Card Product'
      
          ct.setGoToChipTypePage();
          ct.setpickChiptype()
          ct.setEditCardType(varTest.test)
          ct.setEditCardMan(varTest2.newtest)
          ct.setEditCardproduct(varTest2.testname + 'Grt')
          ct.setEditExDate('28/03/2023')
          ct.setEditUpdateButton()
          ct.setsuccessMessage2()
          cy.wait(3000)


          //should edit chip type 'All details'

          ct.setGoToChipTypePage();
          ct.setpickChiptype()
          ct.setEditCardType(varTest.test + 'thk')
          ct.setEditCardMan(varTest2.newtest + 'Pan')
          ct.setEditCardproduct(varTest2.testname + 'guap')
          ct.setEditExDate('12/05/2026')
          ct.setEditUpdateButton()
          ct.setsuccessMessage2()
          cy.wait(3000)
              
     })*/

     it('should Search for chip type on active tab', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      // Serach by complete card Type
      ct.setGoToChipTypePage();
      ct.setSearch(varTest.test )
      ct.setVerifySearch(varTest.test )
      cy.reload()

      // Serach by incomplete card Type
      ct.setGoToChipTypePage();
      ct.setSearch(varTest.test)
      ct.setVerifySearch(varTest.test)
      cy.reload()

      // Serach by complete card Man
      ct.setGoToChipTypePage();
      ct.setSearch(varTest2.newtest )
      ct.setVerifySearch(varTest2.newtest )
      cy.reload()

       // Serach by incomplete card Man
       ct.setGoToChipTypePage();
       ct.setSearch(varTest2.newtest )
       ct.setVerifySearch(varTest2.newtest)
       cy.reload()
       

       // Serach by complete card product
      ct.setGoToChipTypePage();
      ct.setSearch(varTest2.testname )
      ct.setVerifySearch(varTest2.testname )
      cy.reload()

       // Serach by incomplete card Product
       ct.setGoToChipTypePage();
       ct.setSearch(varTest2.testname)
       ct.setVerifySearch(varTest2.testname)
       cy.reload()


        // Serach by non-existing chip type details
        ct.setGoToChipTypePage();
        ct.setSearch('zabrosdjdwriyfdjncsljds')
        ct.setVerifySearch('No Data to Display')
        cy.reload()

        // Serach by empty space 
        ct.setGoToChipTypePage();
        ct.setSearch(' ')
        ct.setVerifySearch('1')
        cy.reload()

        
     })

     /*it('should Deactivate chip type', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      
      ct.setGoToChipTypePage();
      ct.setpickChiptype2()
      ct.setsuccessMessage3()
      
        
     })*/

     /*it('should Search for chip type on inactive tab and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      // Serach by complete card Type
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest.test + 'thk')
      ct.setVerifySearch(varTest.test + 'thk')
      cy.reload()

      // Serach by incomplete card Type
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest.test)
      ct.setVerifySearch(varTest.test)
      cy.reload()

      // Serach by complete card Man
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest2.newtest + 'Pan')
      ct.setVerifySearch(varTest2.newtest + 'Pan')
      cy.reload()

       // Serach by incomplete card Man
       ct.setGoToChipTypePage();
       ct.setNavigateinactive()
       ct.setSearch(varTest2.newtest )
       ct.setVerifySearch(varTest2.newtest)
       cy.reload()
       

       // Serach by complete card product
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest2.testname + 'guap')
      ct.setVerifySearch(varTest2.testname + 'guap')
      cy.reload()

       // Serach by incomplete card Product
       ct.setGoToChipTypePage();
       ct.setNavigateinactive()
       ct.setSearch(varTest2.testname)
       ct.setVerifySearch(varTest2.testname)
       cy.reload()


        // Serach by non-existing chip type details
        ct.setGoToChipTypePage();
        ct.setNavigateinactive()
        ct.setSearch('zabrosdjdwriyfdjncsljds')
        ct.setVerifySearch('No Data to Display')
        cy.reload()

        // Serach by non-existing chip type details
        ct.setGoToChipTypePage();
        ct.setNavigateinactive()
        ct.setSearch(' ')
        ct.setVerifySearch('1')
        cy.reload()

        
     })*/


     it('should Navigate to instition Page and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Serach by complete Institution Name
      
        is.setGoToInstitionPage();
        is.setSearch("njoku")
        is.setVerifySearch("Njoku Ministries")
        cy.reload()

        
        // Serach by incomplete Institution Name
      
        is.setGoToInstitionPage();
        is.setSearch("njoku")
        is.setVerifySearch("Njoku")
        cy.reload()

         // Serach by complete email
      
         is.setGoToInstitionPage();
         is.setSearch("amazing@qa.team")
         is.setVerifySearch("amazing@qa.team")
         cy.reload()

         // Serach by complete email
      
         is.setGoToInstitionPage();
         is.setSearch("amazing")
         is.setVerifySearch("amazing")
         cy.reload()

         // Serach by complete Phone number
      
         is.setGoToInstitionPage();
         is.setSearch("09099002003")
         is.setVerifySearch("09099002003")

         // Serach by incomplete phone number
      
         is.setGoToInstitionPage();
         is.setSearch("090990")
         is.setVerifySearch("090990")
         cy.reload()

         
         // Serach by invalid phone number
      
         is.setGoToInstitionPage();
         is.setSearch("473890")
         is.setVerifySearch("No Data to Display")
         cy.reload()

        // Serach by innvalid parameter
      
        is.setGoToInstitionPage();
        is.setSearch("caosasuddsds sdhsid")
        is.setVerifySearch("No Data to Display")
        cy.reload()
        
     })

     it('should Navigate to inactive instition Page and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Serach by complete Institution Name
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("goodbank XSMIG")
        is.setVerifySearch("goodbank XSMIG")
        cy.reload()

        
        // Serach by incomplete Institution Name
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("good")
        is.setVerifySearch("good")
        cy.reload()

        // Serach by complete email
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("goodbank26086@qa.team")
         is.setVerifySearch("goodbank26086@qa.team")
         cy.reload()

         // Serach by complete email
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("good")
         is.setVerifySearch("good")
         cy.reload()

         // Serach by complete Phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("09099499350")
         is.setVerifySearch("09099499350")

         // Serach by incomplete phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("09099")
         is.setVerifySearch("09099")
         cy.reload()

         
         // Serach by invalid phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("473890")
         is.setVerifySearch("No Data to Display")
         cy.reload()

        // Serach by innvalid parameter
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("caosasuddsds sdhsid")
        is.setVerifySearch("No Data to Display")
        cy.reload()
       
     })

     it('should Add new instition', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
          // create organization with valid details
        is.setGoToInstitionPage();
        is.setAddbutton()
        is.setInstitionName("goodbank " + varTest.test)
        is.setInstitionType()
        is.setphone_number("08033271" + varTest.number)
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        cy.wait(8500)
        is.setsuccessMessage()

        //create organization without name 
        is.setAddbutton()
        is.setInstitionName(" ")
        is.setInstitionType()
        is.setphone_number("08033271" + varTest.number)
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        is.setErrorMessage1()
        is.setClosetab()

        //create organization without phone number
        is.setAddbutton()
        is.setInstitionName( "goodbank " + varTest.test)
        is.setInstitionType()
        is.setphone_number(" ")
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        is.setErrorMessage2()
        is.setClosetab()


          //create organization without Email
          is.setAddbutton()
          is.setInstitionName( "goodbank " + varTest.test)
          is.setInstitionType()
          is.setphone_number("08033271" + varTest.number)
          is.setemail(" ")
          is.setSubmitButton()
          is.setErrorMessage3()
          is.setClosetab()


          //create organization without institution Type
        is.setAddbutton()
        is.setInstitionName("goodbank " + varTest.test)
        is.setphone_number("08033271" + varTest.number)
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        is.setErrorMessage4()
        is.setClosetab()




          //create organization without any details
          is.setAddbutton()
          is.setInstitionName( " ")
          is.setphone_number(" ")
          is.setemail(" ")
          is.setSubmitButton()
          is.setErrorMessage1()
          is.setErrorMessage2()
          is.setErrorMessage3()
          is.setErrorMessage4()
          is.setClosetab()
      
       
        
     })


     it('should Navigate to Artwork Page and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Serach by complete Artwork ID on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("VERVE-NEW-2023-02-23-1116398733")
        Aw.setVerifySearch("VERVE-NEW-2023-02-23-1116398733")
        cy.reload()

        
        // Serach by incomplete Artwork ID on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("VERVE-NEW-2023")
        Aw.setVerifySearch("VERVE-NEW-2023")
        cy.reload()

         // Serach by complete Artwork Title on Approved tab
      
         Aw.setGoToArtworkPage();
         Aw.setSearch("Perso artwork")
         Aw.setVerifySearch("Perso artwork")
         cy.reload()

         // Serach by incomplete email on Approved tab
      
         Aw.setGoToArtworkPage();
         Aw.setSearch("Pers")
         Aw.setVerifySearch("Pers")
         cy.reload()


        // Serach by innvalid parameter on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("caosasuddsds sdhsid")
        Aw.setVerifySearch("No Data to Display")
        cy.reload()


 // Serach by complete Artwork ID on pending tab
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("VERVE-PRO-2023-02-28-1135050193")
        Aw.setVerifySearch("VERVE-PRO-2023-02-28-1135050193")
        cy.reload()

        
        // Serach by incomplete Artwork ID on pending tab
      
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("VERVE-PRO-2023")
        Aw.setVerifySearch("VERVE-PRO-2023")
        cy.reload()

         // Serach by complete Artwork Title on pending tab
      
      
         Aw.setGoToArtworkPage();
         Aw.setPendingtab()
         Aw.setSearch("New ArtworkII")
         Aw.setVerifySearch("New ArtworkII")
         cy.reload()

         // Serach by incomplete email on pending tab
      
      
         Aw.setGoToArtworkPage();
         Aw.setPendingtab()
         Aw.setSearch("New")
         Aw.setVerifySearch("New")
         cy.reload()


        // Serach by innvalid parameter on pending tab
      
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("caosasuddsds sdhsid")
        Aw.setVerifySearch("No Data to Display")
        cy.reload()



         // Serach by complete Artwork ID on Reject tab
      
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("VERVE-PRO-2023-01-03-0918424864")
         Aw.setVerifySearch("VERVE-PRO-2023-01-03-0918424864")
         cy.reload()
 
         
         // Serach by incomplete Artwork ID on Reject tab
       
       
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("VERVE-PRO-2023")
         Aw.setVerifySearch("VERVE-PRO-2023")
         cy.reload()
 
          // Serach by complete Artwork Title on Reject tab
       
       
          Aw.setGoToArtworkPage();
          Aw.setRejectedtab()
          Aw.setSearch("Amelia Huff")
          Aw.setVerifySearch("Amelia Huff")
          cy.reload()
 
          // Serach by incomplete Artwork Title on Reject tab
       
       
          Aw.setGoToArtworkPage();
          Aw.setRejectedtab()
          Aw.setSearch("Amelia")
          Aw.setVerifySearch("Amelia")
          cy.reload()
 
 
         // Serach by innvalid parameter on Reject tab
       
       
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("caosasuddsds sdhsid")
         Aw.setVerifySearch("No Data to Display")
         cy.reload()
 




        
     })
     it('should Navigate to whitelist cards and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Search by first three pan number      
        Wc.setGoTowhitelistPage();
        Wc.setSearch("506")
        Wc.setVerifySearch("506")
        cy.reload()

        
        // Search by last four pan number
      
        Wc.setGoTowhitelistPage();
        Wc.setSearch("1858")
        Wc.setVerifySearch("1858")
        cy.reload()

         

        // Serach by innvalid parameter 
      
        Wc.setGoTowhitelistPage();
        Wc.setSearch("xxxxx903567")
        Wc.setVerifySearch("No Data to Display")
        cy.reload()

        
     })

     it('should Navigate to user and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Search by Complete first name  on active tab     
        Us.setGoToUserPage();
        Us.setSearch("Onyedikachi")
        Us.setVerifySearch("Onyedikachi")
        cy.reload()

        // Search by inComplete first name  on active tab     
        Us.setGoToUserPage();
        Us.setSearch("Onye")
        Us.setVerifySearch("Onye")
        cy.reload()

        
        // Search by Complete last Name on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("Anumudu")
        Us.setVerifySearch("Anumudu")
        cy.reload()

        // Search by inComplete last Name on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("Anu")
        Us.setVerifySearch("Anu")
        cy.reload()

        // Search by Complete Email name on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("mayowa.onaolapo@interswitchgroup.com")
        Us.setVerifySearch("mayowa.onaolapo@interswitchgroup.com")
        cy.reload()

        // Search by inComplete email on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("mayowa.onaolapo")
        Us.setVerifySearch("mayowa.onaolapo")
        cy.reload()

         

        // Serach by innvalid parameter on on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("xxxxx903567")
        Us.setVerifySearch("No Data to Display")
        cy.reload()

                // Search by Complete first name  on inactive tab     
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Ijeoma")
                Us.setVerifySearch("Ijeoma")
                cy.reload()
        
                // Search by inComplete first name  on inactive tab     
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Ije")
                Us.setVerifySearch("Ije")
                cy.reload()
        
                
                // Search by Complete last Name on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Olebuezi")
                Us.setVerifySearch("Olebuezi")
                cy.reload()
        
                // Search by inComplete last Name on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Ole")
                Us.setVerifySearch("Ole")
                cy.reload()
        
                // Search by Complete Email name on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("lynda.okoro@interswitchgroup.com")
                Us.setVerifySearch("lynda.okoro@interswitchgroup.com")
                cy.reload()
        
                // Search by inComplete email on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("lynda.okoro")
                Us.setVerifySearch("lynda.okoro")
                cy.reload()
        
                 
        
                // Serach by innvalid parameter on on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("trjshdjdh udnskvfki")
                Us.setVerifySearch("No Data to Display")
                cy.reload()

        
     })

     it('should Navigate to card and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Search by Complete Artwork on Approved tab     
        Cs.setGoToCardPage();
        Cs.setSearch("Artwork I")
        Cs.setVerifySearch("Artwork I")
        cy.reload()

        // Search by inComplete Artwork on Approved tab     
        Cs.setGoToCardPage();
        //Cs.setSearch("Artwo")
        cy.reload()

        
        // Search by Complete Card Type on Approved tab
      
        Cs.setGoToCardPage();
        Cs.setSearch("CREDIT")
        Cs.setVerifySearch("CREDIT")
        cy.reload()

        // Search by inComplete Card Type on Approved tab
      
        Cs.setGoToCardPage();
        Cs.setSearch("CRED")
        Cs.setVerifySearch("CRED")
        cy.reload()
         

        // Serach by innvalid parameter on on active tab
      
        Cs.setGoToCardPage();
        Cs.setSearch("xxxxx903567")
        Cs.setVerifySearch("No Data to Display")
        cy.reload()

                // Search by Complete Artwork on pending tab     
                Cs.setGoToCardPage();
                Cs.setPendingtab()
                Us.setSearch("Artwork_001")
                Us.setVerifySearch("Artwork_001")
                cy.reload()
        
                // Search by inComplete Artwork on pending tab     
                Cs.setGoToCardPage();
                Cs.setPendingtab()
                Cs.setSearch("Art")
                //Cs.setVerifySearch("Art")
                cy.reload()
        
                
                // Search by Complete Card Type on pending tab
              
                Cs.setGoToCardPage();
                Cs.setPendingtab()
                Cs.setSearch("CREDIT")
                Cs.setVerifySearch("CREDIT")
                cy.reload()
        
                // Search by inComplete Card Type on pending tab
              
                Cs.setGoToCardPage();
                Cs.setPendingtab()
                Cs.setSearch("Cre")
                //Cs.setVerifySearch("Cre")
                cy.reload()
        
                // Search by Complete Artwork Name on Rejected tab
              
                Cs.setGoToCardPage();
                Cs.setRejectedtab()
                Cs.setSearch("Artwork II")
                Cs.setVerifySearch("Artwork II")
                cy.reload()
        
                // Search by inComplete Artwork Name on Rejected tab
              
                Cs.setGoToCardPage();
                Cs.setRejectedtab()
                Cs.setSearch("Art")
               // Cs.setVerifySearch("Art")
                cy.reload()


                // Search by Complete Card Type on Rejected tab
              
                Cs.setGoToCardPage();
                Cs.setRejectedtab()
                Cs.setSearch("PREPAID")
                Cs.setVerifySearch("PREPAID")
                cy.reload()
        
                // Search by inComplete Card Type on Rejected tab
              
                Cs.setGoToCardPage();
                Cs.setRejectedtab()
                Cs.setSearch("PRE")
                Cs.setVerifySearch("PRE")
                cy.reload()
        
                 
        
                // Serach by innvalid parameter on on inactive tab
              
                Cs.setGoToCardPage();
                Cs.setRejectedtab()
                Cs.setSearch("trjshdjdh udnskvfki")
                Cs.setVerifySearch("No Data to Display")
                cy.reload()

        
     })

     it('should Navigate to Department and search and Add department', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Add Department  
        dp.setGoToDepartmentPage();
        dp.setAddButton()
        dp.setAddDepartButton(varTest.test + varTest2.newname)
        dp.setSuccessMessage()
        cy.reload()

        
        // Search by Complete Department

        dp.setGoToDepartmentPage();
        dp.setSearch(varTest.test + varTest2.newname)
        dp.setVerifySearch(varTest.test + varTest2.newname)
        cy.reload()

        // Search by incomplete Department

        dp.setGoToDepartmentPage();
        dp.setSearch(varTest.test)
        dp.setVerifySearch(varTest.test)
        cy.reload()

        // Search by incomplete Department

        dp.setGoToDepartmentPage();
        dp.setSearch("trjshdjdh udnskvfki")
        dp.setVerifySearch("No Data to Display")
        cy.reload()
        
     })
     it('should Navigate to user permission and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Search by  First name 
        Up.setGoToUserPPage();
        Up.setSearch('Amirah')
        Up.setVerifySearch('Amirah')
        cy.reload()

        // Search by  Incomplete first name 
        Up.setGoToUserPPage();
        Up.setSearch('Ami')
        Up.setVerifySearch('Ami')
        cy.reload()

        
        // Search by Last name

        Up.setGoToUserPPage();
        Up.setSearch('Ayeni')
        Up.setVerifySearch(' Ayeni')
        cy.reload()

        // Search by incomplete Last name

        
        Up.setGoToUserPPage();
        Up.setSearch('Aye')
        Up.setVerifySearch(' Aye')
        cy.reload()

        // Search by incomplete Department

        Up.setGoToUserPPage();
        Up.setSearch("trjshdjdh udnskvfki")
        Up.setVerifySearch("No match found")
        cy.reload()
        
     })

     
})