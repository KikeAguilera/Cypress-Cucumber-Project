Feature: Removing Items from Cart

  Scenario: User removes an item from the cart
    Given the user has "Sauce Labs Backpack" in the cart
    When the user removes "Sauce Labs Backpack" from the cart
    Then the cart should be empty