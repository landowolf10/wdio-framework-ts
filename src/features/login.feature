Feature: Webdriver IO app test
  Scenario Outline: As a user, I can log in successfully
    Given app was opened
    When entering email "user@mail.com" and password "SuperSecretPassword!"
    When pressing login button
    Then verify user successfully logged in