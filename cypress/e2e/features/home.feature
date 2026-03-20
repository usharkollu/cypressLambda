@home
Feature: Home Page Feature Test

    Background:
        Given I am logged in successfully

    @smoke @regression @prod
    Scenario: Verify the title of the home page
        Then I should see home page with Products
    
    @smoke
    Scenario: Verify products are displayed
        Then I should see 6 products
        And product names should be visible
        And product prices should be visible

   