class UserP
{
setGoToUserPPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(10) > .isw-sideBarNavLink').click()
    
        
}
setSearch(search)
{
    cy.get('.input-container.d-flx.al-i-c.cmt-1.cmb-3').click().type(search)
}

setVerifySearch(Searchpara)
{
    cy.contains(Searchpara).should('be.visible')
}

setPendingtab()
{
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span').click()
}
setRejectedtab()
{
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3) > span').click()
}
      
}

export default UserP;