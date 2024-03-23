class ChipType 
{
setGoToChipTypePage()
{
    cy.get('#burger-cont > :nth-child(1)').click();
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(7) > .isw-sideBarNavLink').click()      
}
setAddChipButton()
{
    cy.get('.add-button-container > .d-flx').click();
}

setCardType(CarType)
{
    cy.get('#card_type').click().type(CarType)         
}

setCardMan(CardMan)
{
    cy.get('#card_manufacturer').click().type(CardMan)

}
setChipprod(chipProd)
{
    cy.get('#chip_product').click().type(chipProd)
}

setDate(date)
{
    cy.get("#expiry_date").click().type(date)
}

setSubmitbutton()
{
    cy.get('#addChipType').click()
}
setsuccessMessage()
{
    cy.contains('Chip successfully created').should('be.visible')
}
setErrorMessage1()
{
    cy.contains('This chip type already exist.').should('be.visible')
}
setErrorMessage2()
{
    cy.contains('Card type cannot be empty!').should('be.visible')
}
setErrorMessage3()
{
    cy.contains('Card manufacturer cannot be empty!').should('be.visible')
}
setErrorMessage4()
{
    cy.contains('Chip product cannot be empty!').should('be.visible')
}

setErrorMessage5()
{
    cy.contains('Provide a valid expiry date.').should('be.visible')
}
setclose()
{
    cy.get('.ant-modal-close-x').click()
}
setpickChiptype()
{
    cy.get('#bd759928-d400-42e5-9ca3-212e89e920e2 > #table-dropdown > .anticon > svg').trigger('mouseover')
    //cy.get('#e8530a86-3160-42d5-b19b-eb7cd2fac9a1 > #table-dropdown > .anticon > svg').trigger('mouseover')
    cy.get('.Edit').click()
}
setpickChiptype2()
{
    cy.get('#bd759928-d400-42e5-9ca3-212e89e920e2 > #table-dropdown > .anticon > svg').trigger('mouseover')
    cy.get('.Deactivate').click()
}

setEditCardType(cardtype)
{
    cy.get('#cardTypeEdit').click().clear().type(cardtype)
}
setEditCardMan(cardman2)
{
    cy.get('#cardManufacturerEdit').click().clear().type(cardman2)
}

setEditCardproduct(Cardproduct)
{
    cy.get('#chipProductEdit').click().clear().type(Cardproduct)
}

setEditExDate(expiryDate)
{
    cy.get('#expiryDateEdit').click().clear().type(expiryDate)
}
   
setEditUpdateButton(expiryDate)
{
    cy.get('#editChipType').click()
}
   
setsuccessMessage2()
{
    cy.contains('Chip successfully updated').should('be.visible')
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

setNavigateinactive()
{
    cy.get('[aria-selected="false"] > span').click()
}

setsuccessMessage3()
{
    cy.contains('chip deactivated').should('be.visible')
}

      
}

export default ChipType;