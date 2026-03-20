
Feature: Login Feature test

    @regression @qa
    Scenario:    I want to test invalid logins

        Given I open the sauce labs
        When I enter username <user_name>
        And I enter password <pass_word>
        And I submit
        Then I should see error as this user has been locked out
    
        Examples:
        |user_name|pass_word|
        |invalid_user|wrong_pass|
        |locked_out_user|"secret_sauce"|
        |problem_user|secret_sauces|
    
    @smoke @prod @regression
    Scenario:    I want to test successful login

        Given I open the sauce labs
        When I login with environment credentials
        Then I will be logged in

