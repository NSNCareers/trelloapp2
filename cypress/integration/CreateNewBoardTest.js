/// <reference types="Cypress" />

const addBoard = "div>div>h1[class='text-white']";
const boardTitleField = "div>div>input";
const createBoard = "div>button[data-cy*='board']";
const boardTitleText = "div>div>div>div[class*='invisible']";
const listTitleField = "input[placeholder*='list title']";
const addListButton = "button[data-cy='save']";
const addAnotherListButton = "div[data-cy='new-card']";
const listTitleField2 = "textarea[data-cy='new-card-input']";
const addListButton2 = "div>button[class*='inline-block']";
const cardTitle = "div[data-cy='card-title']";
const deleteCardTitle = "div[data-cy='card-detail-delete']";
const deleteCareMessage = "div>div>div[class*='m-4 text']";

describe('Create new board Test', function(){
    
    before(function(){
        cy.visit(Cypress.env('baseUrl'));
    })

    it('Verify Board successfully Created',function() {
        cy.get(addBoard).click();
        cy.get(boardTitleField).type("My New Test Board");
        cy.get(createBoard).click();
        cy.get(boardTitleText).contains('My New Test Board');
    })

    it('Verify new list successfully Created',function() {
        cy.get(listTitleField).type("My New List");
        cy.get(addListButton).click();
        cy.get(addAnotherListButton).click();
        cy.get(listTitleField2).type("Add Another List");
        cy.get(addListButton2).click();
        cy.get(cardTitle).click();
        cy.get(deleteCardTitle).click();
        cy.get(deleteCareMessage).contains('Card was deleted');
    })

    after(function(){
        cy.end();
    })
})