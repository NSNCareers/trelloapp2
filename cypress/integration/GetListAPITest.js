/// <reference types="Cypress" />

const newBoard = "div>div>h1[class*='text-white font']";

describe('Get List', function(){

    before(function(){
        cy.visit(Cypress.env('baseUrl'));
    })


    it('Get List API Test',function() {
        
        cy.intercept({
            method:'Get',
            url:'http://localhost:3000/api/lists?boardId=3040478287'
        },{
            statusCode: 200,
            body:[
                {
                    "name": "List three",
                    "boardId": 3040478287,
                    "order": 2,
                    "id": 68527174866,
                    "created": "2021-10-05"
                  }
              ]
        }).as('NewList');
        cy.get(newBoard).click();
        cy.wait('@NewList')
    })

    after(function(){
        cy.end();
    })
})