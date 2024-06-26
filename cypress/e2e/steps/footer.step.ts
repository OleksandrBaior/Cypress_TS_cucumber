/// <reference types="cypress" />
import mainPage from '../../pages/main.page';
import endpoints from '../../../resourcers/endpoints.json';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I scroll page down', () => {
    mainPage.footerSection.footer().scrollIntoView();
});
Then('Image footer is visible', () => {
    mainPage.footerSection.imageFooter().should('be.visible');
});
When('I click on LinkedIn icon', () => {
    mainPage.footerSection.linkedIn().invoke('removeAttr', 'target');
    mainPage.footerSection.linkedIn().click();
});
Then('LinkedIn page opens', () => {
    cy.url().should('include', endpoints.linkedin);
});
When('I click on twitter icon', () => {
    mainPage.footerSection.twitter().invoke('removeAttr', 'target');
    mainPage.footerSection.twitter().click();
});
Then('Twitter page opens', () => {
    cy.url().should('include', endpoints.twitter);
});
When('I click on facebook icon', () => {
    mainPage.footerSection.facebook().invoke('removeAttr', 'target');
    mainPage.footerSection.facebook().click();
});
Then('Facebook page opens', () => {
    cy.url().should('include', endpoints.facebook);
});
