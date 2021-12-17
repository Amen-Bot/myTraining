context('This use case is to display the accessibility of the Jumia site', () =>{
    it('It should launch the url', () =>{
        cy.launchSite();
    })

    it('It should click on the Account Button', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.clickTheAccountButton(em.accountButton);
    })  })

        it('It should click on the SignIn Button', () =>{
            cy.fixture('element-mappers').then((em) =>{
                cy.clickTheSignInButton(em.signInButton);
        })
    })

    it('It should navigate to Email Address on the field', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.typeEmailAddress(em.emailAddressField);
        }) 
    })
    it('It should enter Email Address on the field', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.typeEmailAddress(em.emailAddressField,'amenaghayedo@gmail.com');
        })
    
    })
        it('It should enter Password on the field', () =>{
            cy.fixture('element-mappers').then((em) =>{
                cy.typePassword(em.passwordField,'Canada@2020#3');
        })
    })
    it('It should click on logIn Button', () =>{
        cy.fixture('element-mappers').then((em) =>{
            cy.clickLogInButton(em.logInButton);
        })
    })    

})