

/// <reference types="cypress"/>



describe('validation', ()=>{
it('empty fields validation', ()=>{
    cy.visit('/')
    cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()
    cy.get(':nth-child(1) > .css-y0dsrb').should('contain','Please enter your first name.')
    cy.get('.css-1w6b0ve > :nth-child(2) > .css-y0dsrb').should('contain','Please enter your last name.')

    cy.get('.eepjrh81 > .css-y0dsrb').should('contain','Please enter your email address')

    cy.get('.eepjrh80 > .css-y0dsrb').should('contain','Please enter your password .')


    cy.get('#firstname').type('test')
 
    cy.get('#lastname').type('testing')


    /// to create random email every time
    var randomemail = 'test' + Math.floor(Math.random() * 10000) + '@gmail.com'

    cy.get('#email').type( randomemail,{ replace:true })

    cy.get('[type="password"]').type('123456789')

     cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

     cy.url().should('include', '/setup/career-interests') // => true
       


  


})





})


