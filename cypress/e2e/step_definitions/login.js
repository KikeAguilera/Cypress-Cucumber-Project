import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';

Given("the user is on the login page", () => {
  cy.visit("/");
});

When("the user enters valid credentials {string} and {string} and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("the user enters invalid credentials {string} and {string} and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username, password)
});
Then("the user should be redirected to the home page", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("an error message {string} should be displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
