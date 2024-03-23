class department
{
setGoToDepartmentPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(9) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()


        
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

setAddButton()
{
    cy.get('.add-button-container > .d-flx').click()
}
setAddDepartButton(department)
{
    cy.get('.d-flx-c.j-c-c').click().type(department)
    cy.get('#addDepartment').click()
}

setSuccessMessage()
{
    cy.contains('Department successfully created').should('be.visible')
}

}

export default department;