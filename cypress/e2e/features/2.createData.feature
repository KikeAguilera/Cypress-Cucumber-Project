Feature: Adding Items to Cart

Scenario: User creates new data
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    Then the cart should display "1" item