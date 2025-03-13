Feature: Login Process

  Background:
  Given the user is on the login page

  Scenario: User logs in with valid credentials
    
    When the user enters valid credentials "standard_user" and "secret_sauce" and clicks on the login button
    Then the user should be redirected to the home page

  Scenario: User fails to log in with invalid credentials
    When the user enters invalid credentials "locked_out_user" and "secret_sauce" and clicks on the login button
    Then an error message "Epic sadface: Sorry, this user has been locked out." should be displayed