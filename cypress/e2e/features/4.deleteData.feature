Feature: Clearing the Cart

  Scenario: User clears the cart
    Given The user has multiple items in the cart
    When The user clears the cart
    Then The cart should be empty