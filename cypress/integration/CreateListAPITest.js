/// <reference types="Cypress" />

const newBoard = "div>div>h1[class*='text-white font']";

describe('Create API Test', function(){

    before(function(){
        cy.visit(Cypress.env('baseUrl'));
    })

    it('Add List',function() {

        cy.get(newBoard).click();

        cy.request(
            'Post',
            'http://localhost:3000/api/lists',
            {
                "name": "List Five",
                "boardId": 3040478287,
                "order": 3
            }
        ).then(function(response)
        {
            expect(response.status).to.eq(201);
        });
    })

    after(function(){
        //cy.end();
    })
})