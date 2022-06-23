//import { first } from 'cypress/types/lodash';
import login from '../Page Objects/JS login'

const fixturetest2=[

       "example.json",
 
    ]



describe('profile incomplete step1',()=>{

it('submit with empty fields',()=>{

const loginJS= new login();

loginJS.navigate()
       .enterusername('hebss@gmail.com')
       .enterpassword('123456789')
       .submit();
   cy.get('.css-1kqwv1a').click()
   cy.get(':nth-child(2) > .css-tukd06 > .css-1mk5lo3').should('contain', 'This is a required field');
   cy.get(':nth-child(3) > .css-tukd06 > .css-1mk5lo3').should('contain', 'This is a required field');
   cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').should('contain', 'This is a required field');
   cy.get(':nth-child(5) > .custom-selectbox > .date-picker-wrapper__error').should('contain', 'This is a required field');
   cy.get('.css-1mrz7hs').should('contain', 'This is a required field');
   cy.get(':nth-child(7) > .custom-selectbox > .date-picker-wrapper__error').should('contain', 'This is a required field');

})

it('fields validation TSC1',()=>{

    const loginJS= new login();

    loginJS.navigate()
           .enterusername('hebss@gmail.com')
           .enterpassword('123456789')
           .submit();

    cy.get(':nth-child(3) > [tabindex="0"] > .panel-body').click()
    // validate that user can select more than one option
    cy.get('.css-3dejfc > :nth-child(1)').click()
    cy.get('.css-3dejfc > :nth-child(2)').click()
    cy.get(':nth-child(7) > .css-1lylxjf').click()

   cy.get('#react-select-2--value > .Select-placeholder').click().type('test')
   
   cy.get('.custom-selectbox__add-to-list').click()
  // cy.get('.custom-selectbox').type('{downarrow}').click()
  //cy.get('.date-picker-wrapper__error').should('contain','Add at least 2.')

   cy.get(':nth-child(5) > .custom-selectbox > .Select > .Select-control').click().type('And')

   cy.get('#react-select-3--value').type('{downArrow}').type('{enter}')
   cy.get('.date-picker-wrapper__error').should('contain','Add at least 2.')

   cy.get('.css-15r58nl').click().type('0')
   cy.get('.css-bl1ilx').click()
  cy.get('.css-1mrz7hs').should('have.text',"This doesn't look right. Your salary must be a number larger than 0.")

   cy.get('.checkbox__input').click()

   cy.get('.Select-placeholder').click()
   cy.get('#react-select-6--value').type('{downArrow}').type('{enter}')

   cy.get(':nth-child(3) > .switch-button > .switch-button__container > .switch-button__circle').click()

   cy.get(':nth-child(4) > .switch-button > .switch-button__container > .switch-button__circle').click()

   cy.get('.css-1kqwv1a').click()

})


it('fields validation TSC2',()=>{
       const loginJS= new login();

       loginJS.navigate()
              .enterusername('hebss@gmail.com')
              .enterpassword('123456789')
              .submit();

              cy.get(':nth-child(3) > [tabindex="0"] > .panel-body').click()
              // validate that user can select more than one option
              cy.get('.css-3dejfc > :nth-child(1)').click()
              cy.get('.css-3dejfc > :nth-child(2)').click()
              cy.get(':nth-child(7) > .css-1lylxjf').click()
          
             cy.get(':nth-child(4) > .custom-selectbox > .Select > .Select-control').click()
            // cy.get('[contenteditable]')
             .type('test{enter}')
             .type('quality{enter}')
             .type('devops{enter}')
             .type('designer{enter}')
             //.type('design{enter}')
             //.type('qc{enter}')
             //.type('devopssss{enter}')
             //.type('developer{enter}')
             //.type('php{enter}')
             //.type('tester{enter}')
             //.type('testing{enter}')

             //cy.get('#react-select-2--value > .Select-placeholder').click().type('quality{enter}')

            // cy.get('.custom-selectbox__add-to-list').click()


       // validate that user can't add more than 10 items

            cy.get(':nth-child(5) > .custom-selectbox > .Select > .Select-control').click().type('And{downArrow}{enter}')
            .type('mar{downArrow}{enter}')
            .type('cust{downArrow}{enter}')
            .type('qua{downArrow}{enter}')
            .type('dev{downArrow}{enter}')
            .type('wr{downArrow}{enter}')
            .type('fa{downArrow}{enter}')
            .type('ana{downArrow}{enter}')
            .type('ban{downArrow}{enter}')
            .type('med{downArrow}{enter}')
            .type('Hos{downArrow}{enter}')

            cy.get('.css-bl1ilx').click()
            cy.get('.date-picker-wrapper__error').should('contain','You have reached the job categories limit (10).')

            cy.get('.css-15r58nl').click().type('1000')

            cy.get('.Select-placeholder').click()
            cy.get('#react-select-6--value').type('{downArrow}').type('{enter}')
})

    
        before(function() {
       cy.fixture("example.json").then(function(data){
         this.data =data;
       })
     })
       beforeEach(()=>{
           cy.visit('/register')
       })


 it.only('Happy scenario TSC3',function(){
      var randomemail = 'test' + Math.floor(Math.random() * 10000) + '@gmail.com';


       cy.get('#firstname').type(this.data.firstname);
         cy.get('#lastname').type(this.data.lastname);
         cy.get('#email').type(randomemail,{ replace:true });
         cy.get('[type="password"]').type(this.data.password);
         cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

      
        cy.wait(5000)

      cy.get('body').then($body => {
       if ($body.find('.ReactModal__Overlay').length) {
           cy.log('modal is here')
          
         cy.get('.css-l322kb > svg > path').click();

   
       }
       else
       {
             // this.skip();
              cy.log('No modal');
       }
   })


              cy.wait(5000)
              cy.get('.css-1gapyfo').eq(2).click()
              // validate that user can select more than one option
              cy.get('.css-3dejfc > :nth-child(1)').click()
              cy.get('.css-3dejfc > :nth-child(2)').click()
              cy.get(':nth-child(7) > .css-1lylxjf').click()
          
             cy.get(':nth-child(3) > .custom-selectbox > .Select > .Select-control').click()
             .type('test{enter}')
             .type('quality{enter}')
             .type('devops{enter}')
             .type('designer{enter}')


             cy.get(':nth-child(4) > .custom-selectbox > .Select > .Select-control').click().type('And{downArrow}{enter}')
             .type('mar{downArrow}{enter}')
             .type('cust{downArrow}{enter}')
             .type('qua{downArrow}{enter}')
             .type('dev{downArrow}{enter}')
             .type('wr{downArrow}{enter}')
             .type('fa{downArrow}{enter}')
             .type('ana{downArrow}{enter}')
             .type('ban{downArrow}{enter}')

             cy.get('.css-15r58nl').click().type('1000')

             cy.get('.Select-placeholder').click()
             cy.get('#react-select-6--value').type('{downArrow}').type('{enter}')


             cy.get('.css-1kqwv1a').click()
             cy.wait(20000)

             cy.url().should('include', '/setup/general-info') // => true

            

})




})