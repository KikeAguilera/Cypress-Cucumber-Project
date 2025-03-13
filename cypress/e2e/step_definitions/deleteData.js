import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("The user has multiple items in the cart", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get("button.btn_inventory").first().click();
  cy.get("button.btn_inventory").eq(1).click();
});

When("The user clears the cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.get("button.cart_button").each(($btn) => {
    cy.wrap($btn).click();
  });
});

Then("The cart should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});
