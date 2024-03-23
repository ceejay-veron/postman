class institution 
{
setGoToInstitionPage()
{
    cy.get('#burger-cont > :nth-child(1)').click();
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()      
}
setInactiveTab()
{
    cy.get("div[class=' ant-tabs-tab'] span").click()
     
}


setSearch(search)
{
    cy.get('.input-container.d-flx.al-i-c.cmt-1.cmb-3').click().type(search)
    cy.get('.input-container > .d-flx').click()
}

setVerifySearch(Searchpara)
{
    cy.contains(Searchpara).should('be.visible')
}

setAddbutton()
{
    cy.get('.add-button-container > :nth-child(2)').click()
}
setInstitionName(Name)
{
    cy.get("#institution_name").click().type(Name)
}

setInstitionType()
{
    cy.get("#outlined-select-currency").click()
    cy.get("div[id='menu-'] li:nth-child(1)").click()    
}

setphone_number(Name)
{
    cy.get("#phone_number").click().type(Name)
}
setemail(email)
{
    cy.get("#email").click().type(email)
}

setSubmitButton()
{
    cy.get("#createOrg").click()
}
setsuccessMessage()
{
    cy.contains('Organization was successfully created').should('be.visible')
}
setErrorMessage1()
{
    cy.contains('Institution name cannot be empty!').should('be.visible')
}

setErrorMessage2()
{
    cy.contains('Phone number cannot be empty!').should('be.visible')
}
setErrorMessage3()
{
    cy.contains('Email cannot be empty!').should('be.visible')
}
setErrorMessage4()
{
    cy.contains('Institution type cannot be empty!').should('be.visible')
}

setClosetab()
{
    cy.get(".ant-modal-close-x").click()
}


      
}

export default institution;