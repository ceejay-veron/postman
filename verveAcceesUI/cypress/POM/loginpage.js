class Login 
{
setUserName(username)
{
    cy.get('input[type="email"]').type(username);        
}
setPassword(password)
{
    cy.get('input[type="password"]').type(password);
}
clickSubmit()
{
    cy.get('#login').click().wait(12000);
}

clickSubmit2()
{
    cy.get('#login').click().wait(3000);
}
VerifyLogin()
{
    cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
    cy.contains('CORPORATE_ADMIN').should('be.visible')
    cy.get('.red').click() ;
}            
            
}

export default Login;