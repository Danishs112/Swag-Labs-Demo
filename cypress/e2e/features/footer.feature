Feature: Footer Section

    As a tester, I want to test the "https://www.saucedemo.com/" application Footer Section

    Scenario Outline: Footer Section - checking the visibility of items on the footer section
        Given I login into dashboard page
        Then I should see the "footer" on the "page"
        When I click on the "<socialMedia>" icon on the footer section
        Then I should navigate to the "<socialMedia>" page

        Examples:
            | socialMedia |
            | Twitter     |
            | Facebook    |
            | LinkedIn    |

    Scenario: Footer Section - checking the visibility of heading on the footer section
        Given I login into dashboard page
        Then I should see the "footer" on the "page"
        And I should see the "footerheading" on the "footer"

