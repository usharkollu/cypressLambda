Feature: Login Feature test

    Scenario:    I want to test the login page

        Given I open the sauce labs
        When I enter username <user_name>
        And I enter password <pass_word>
        And I submit
        Then I will be logged in
    
        Examples:
        |user_name|pass_word|
        |"standard_user"|secret_sauce|
        |locked_out_user|secret_sauce|
        |problem_user|secret_sauce|
        |performance_glitch_user|secret_sauce|

