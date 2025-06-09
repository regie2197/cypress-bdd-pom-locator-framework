Feature: Parabank Login

  Background:
    Given I visit parabank.parasoft.com

  Scenario: Verify login page elements
    Then I should see a username input field
    And I should see a password input field

  Scenario: Verify that user is able to login with valid credentials
    When I enter "john" into the username field
    And I enter "demo" into the password field
    And I click on the "Log In" button
    Then I should be redirected to the account overview page

  Scenario: Verify login fails with invalid credentials
    When I enter "invalidUser" into the username field
    And I enter "wrongPassword" into the password field
    And I click on the "Log In" button
    Then I should see an error message saying "The username and password could not be verified."

  Scenario: Verify that user is able to logout successfully
    When I enter "john" into the username field
    And I enter "demo" into the password field
    And I click on the "Log In" button
    Then I should be redirected to the account overview page
    When I click on the "Log Out" link
    Then I should be redirected to the login page

