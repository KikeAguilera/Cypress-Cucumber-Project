import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user has {string} in the cart", (item) => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.contains(".inventory_item", item).within(() => {
    cy.get("button").click();
  });
});

When("the user removes {string} from the cart", (item) => {
  cy.get(".shopping_cart_link").click();
  cy.contains(".cart_item", item).within(() => {
    cy.get("button").click();
  });
});

Then("the cart should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});
