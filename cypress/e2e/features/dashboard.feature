Feature: Dashboard Section

    As a tester, I want to test the "https://www.saucedemo.com/" application Dashboard Section

    Scenario: Dashboard Section - checking the visibility of items on the product cards
        Given I login into dashboard page
        Then I should see all the product "cards" on the page
        And I should see all the "product image" on the product cards
        And I should see all the "product name" on the product cards
        And I should see all the "product description" on the product cards
        And I should see all the "product prize" on the product cards
        And I should see all the "add to card button" on the product cards

    Scenario: Dashboard Section - checking the navigation from dashboard page to product page through image click
        Given I login into dashboard page
        When I click on "first product image" on the product card
        Then I should navigate to the "product" page