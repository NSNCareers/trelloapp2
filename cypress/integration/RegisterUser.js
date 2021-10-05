/// <reference types="Cypress" />

const loginButton = 'div>span';
const signUpLink = "div>a[href='/signup']";
const emailField = "input[name='email']";
const passwordField = "input[name='password']";
const sendWelcomeEmailCheckBox = "label[for='welcomeEmail']";
const createAccountButton = "div>button[class*='full']";
const loginOutMessage = "div[class*='h-14']>div";
const logoutButton = "div>div>div[class*='self']";
let jsonData;

describe('Register new user Test', function(){
    
    before(function(){
        cy.visit(Cypress.env('baseUrl'));
        cy.fixture('config').then(function (testdata) {
            this.testdata = testdata
        })
        cy.visit(Cypress.env('baseUrl'));
        cy.get(loginButton).click();
        cy.get(signUpLink).click();
        
    })

    it('Verify User successfully logged in',function() {
        cy.get(emailField).type(this.testdata.email);
        cy.get(passwordField).type(this.testdata.password);
        cy.get(sendWelcomeEmailCheckBox).click();
        cy.get(createAccountButton).click();
        cy.get(loginOutMessage).contains('User is logged in');
    })

    it('Verify User successfully logged out',function() {
        cy.get(logoutButton).click();
        cy.get(loginOutMessage).contains('User was logged out');
    })

    after(function(){
        cy.end();
    })
})