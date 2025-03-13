import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';

Given("the user is logged in", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("the user adds {string} to the cart", (item) => {
  cy.contains(".inventory_item", item).within(() => {
    cy.get("button").click();
  });
});

Then("the cart should display {string} item", (count) => {
  cy.get(".shopping_cart_badge").should("have.text", count);
});
