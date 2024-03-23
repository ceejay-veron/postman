class login 
{


    txtUserName='input[type="email"]';
    txtPassword='input[type="password"]';
    btnSubmit='#login';
    lblMessage='CORPORATE_ADMIN';


setUserName(username)
{
    cy.get(txtUserName).type(username)           
}
setPassword(password)
{
    cy.get( txtPassword).type(Password)
}
clickSubmit()
{
    cy.get(btnSubmit).click({timeout : 2000})
}

VerifyLogin()
{
    cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
    cy.contains(lblMessage).should('be.visible')
    cy.get('.red').click() 
}            
            
}

export default login;