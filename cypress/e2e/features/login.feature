Feature: Login Page

    As a tester, I want to test the "https://www.saucedemo.com/" application Login page


    Scenario Outline: Login Page - checking the functionality of the Login Page with valid credentials
        Given I am on the "Login" page
        Then I should see "Swag Labs" text on the page
        When I fill "<userName>" on the "username" input field
        And I fill "<password>" on the "password" input field
        And I click on the "Login" button on the page
        Then I should navigate to the "dashboard" page

        Examples:
            | userName      | password      |
            | validUsername | validPassword |


    Scenario Outline: Login Page - checking the functionality of the Login Page with invalid credentials
        Given I am on the "Login" page
        Then I should see "Swag Labs" text on the page
        When I fill "<userName>" on the "username" input field
        And I fill "<password>" on the "password" input field
        And I click on the "Login" button on the page
        Then I should see "<errorMessage>" text on the page

        Examples:
            | userName       | password        | errorMessage                                                              |
            | invalidUserame | invalidPassword | Epic sadface: Username and password do not match any user in this service |
