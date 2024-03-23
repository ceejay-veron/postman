class Users
{
setGoToUserPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(5) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
    
        
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

setInactiveTab()
{
    cy.get('[aria-selected="false"] > span').click()
}

      
}

export default Users;