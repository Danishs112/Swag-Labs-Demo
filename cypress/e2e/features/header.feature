Feature: Header Section

    As a tester, I want to test the "https://www.saucedemo.com/" application Header Section

    Scenario: Header Section - checking the visibility of "Swag Labs" heading on the header section
        Given I login into dashboard page
        Then I should see "Swag Labs" text on the page

    Scenario: Header Section - checking the functionality of hamburger icon on the header section
        Given I login into dashboard page
        When I click on the "hamburger icon" on the "page"
        Then I should see the "sidebar" on the "page"
        When I click on the "close button" on the "sidebar"
        Then I should not see the "sidebar" on the page

    Scenario: Header Section - checking the functionality of cart icon on the header section
        Given I login into dashboard page
        When I click on the "cart icon" on the "page"
        Then I should navigate to the "cart" page