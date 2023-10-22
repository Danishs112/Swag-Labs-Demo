Feature: Header Section

    As a tester, I want to test the "https://www.saucedemo.com/" application Header Section
    
    @headersection @regressionsuite @tracker-05
    Scenario: Header Section - checking the visibility of "Swag Labs" heading on the header section
        Given I login into dashboard page
        Then I should see "Swag Labs" text on the page
    
    @headersection @regressionsuite @tracker-06
    Scenario: Header Section - checking the functionality of hamburger icon on the header section
        Given I login into dashboard page
        When I click on the "hamburger icon" on the "page"
        Then I should see the "sidebar" on the "page"
        When I click on the "close button" on the "sidebar"
        Then I should not see the "sidebar" on the page
    
    @headersection @regressionsuite @tracker-07
    Scenario: Header Section - checking the functionality of cart icon on the header section
        Given I login into dashboard page
        When I click on the "cart icon" on the "page"
        Then I should navigate to the "cart" page
    
    @headersection @regressionsuite @tracker-08
    Scenario: Header Section - checking the visibility of "Products" heading on the header section
        Given I login into dashboard page
        Then I should see "Products" text on the page
    
    @headersection @sanitysuite @tracker-09
    Scenario Outline: Header Section - checking the functionality of product sort dropdown on the header section
        Given I login into dashboard page
        When I select "<filterList>" on the "product sort" dropdown
        Then I should see the "cards" according to that filter

        Examples:
            | filterList          |
            | Name (A to Z)       |
            | Name (Z to A)       |
            | Price (low to high) |
            | Price (high to low) |
