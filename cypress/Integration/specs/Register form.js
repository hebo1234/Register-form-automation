const fixturetest=[

    "example.json",
    
    ]
    
    describe('All validations by fixture',function(){
    
        before(()=> {
            cy.fixture("example.json").then((data)=>{
              this.data =data;
            })
        })
            beforeEach(()=>{
                cy.visit('/')
            })

             
        // check first name validation with special charchters
        it('first field test1',()=>{
         cy.get('#firstname').type("+test+");
         cy.get('#lastname').type(this.data.lastname);
         cy.get('#email').type(this.data.email);
         cy.get('[type="password"]').type(this.data.password);
         cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

         cy.get(':nth-child(1) > .css-y0dsrb').should('contain','Name must not have special characters or numbers')
    
        })
        // check first name validation with only spaces
        it('first field test2',()=>{
            cy.get('#firstname').type(" ");
            cy.get('#lastname').type(this.data.lastname);
            cy.get('#email').type(this.data.email);
            cy.get('[type="password"]').type(this.data.password);
            cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()
   
            cy.get(':nth-child(1) > .css-y0dsrb').should('contain','Name must be 2 characters at least')

        })

        // check first name validation with numbers
        it('first field test3',()=>{
            cy.get('#firstname').type("test123");
            cy.get('#lastname').type(this.data.lastname);
            cy.get('#email').type(this.data.email);
            cy.get('[type="password"]').type(this.data.password);
            cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()
   
            cy.get(':nth-child(1) > .css-y0dsrb').should('contain','Name must not have special characters or numbers')

        })

        // check last name validation with special charchters
        it('Last field test1',()=>{
             cy.get('#firstname').type(this.data.firstname);
             cy.get('#lastname').type("=testing");
             cy.get('#email').type(this.data.email);
             cy.get('[type="password"]').type(this.data.password);
             cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

             cy.get('.css-1w6b0ve > :nth-child(2) > .css-y0dsrb').should('contain','Name must not have special characters or numbers')

       })

        // check last name validation with less than two charchters
       it('Last field test2',()=>{
            cy.get('#firstname').type(this.data.firstname);
            cy.get('#lastname').type("t");
            cy.get('#email').type(this.data.email);
            cy.get('[type="password"]').type(this.data.password);
            cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

            cy.get('.css-1w6b0ve > :nth-child(2) > .css-y0dsrb').should('contain','Name must be 2 characters at least')
   
       })
        // check last name validation with numbers
       it('Last field test2',()=>{
            cy.get('#firstname').type(this.data.firstname);
            cy.get('#lastname').type("12345");
            cy.get('#email').type(this.data.email);
            cy.get('[type="password"]').type(this.data.password);
            cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

            cy.get('.css-1w6b0ve > :nth-child(2) > .css-y0dsrb').should('contain','Name must not have special characters or numbers')
   
       })
 

    // check validation of invalid email format 
       it('Email field test1',()=>{
        cy.get('#firstname').type(this.data.firstname);
        cy.get('#lastname').type(this.data.lastname);
        cy.get('#email').type("heba@g");
        cy.get('[type="password"]').type(this.data.password);
        cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

        cy.get('.eepjrh81 > .css-y0dsrb').should('contain','Please enter a valid email address')
   
       })


        // check validation of existing email
        
       it('Email field test2',()=>{
        cy.get('#firstname').type(this.data.firstname);
        cy.get('#lastname').type(this.data.lastname);
        cy.get('#email').type("test@gmail.com");
        cy.get('[type="password"]').type(this.data.password);

        cy.get('.eepjrh81 > .css-y0dsrb').should('contain','This email already exists.')
   
       })
       
        // check validation of password less than 8 charc
       it('Password field test',()=>{
        cy.get('#firstname').type(this.data.firstname);
        cy.get('#lastname').type(this.data.lastname);
        cy.get('#email').type(this.data.email);
        cy.get('[type="password"]').type(1234567);
        cy.get('button[type="submit"][class="css-6lejne ezfki8j0"]').click()

        cy.get('.eepjrh80 > .css-y0dsrb').should('contain','Please enter at least 8 characters')
   
       })


    })