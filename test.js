describe('Automazione Test su Web Tables', () => {
    it('Aggiunta di un nuovo record nella tabella', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Laura');
        cy.get('#lastName').type('Guardi');
        cy.get('#userEmail').type('laura.guardi@gmail.com');
        cy.get('#age').type('35');
        cy.get('#salary').type('12000');
        cy.get('#department').type('Marketing');
        cy.get('#submit').click();
        cy.get('.rt-tbody').contains('Laura').should('exist');
    });

    it('Modifica di un record esistente nella tabella', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.get('.rt-tbody .rt-tr-group').first().find('[title="Edit"]').click();
        cy.get('#firstName').clear().type('Anna');
        cy.get('#lastName').clear().type('De Marco');
        cy.get('#userEmail').clear().type('anna.demarco@gmail.com');
        cy.get('#age').clear().type('28');
        cy.get('#salary').clear().type('15000');
        cy.get('#department').clear().type('HR');
        cy.get('#submit').click();
        cy.get('.rt-tbody').contains('Anna').should('exist');
    });

    it('Rimozione di un record esistente dalla tabella', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.get('.rt-tbody .rt-tr-group').first().find('[title="Delete"]').click();
        cy.get('.rt-tbody').contains('Anna').should('not.exist');
    });
});
