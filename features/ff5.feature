@ff2 @SW_A_ON @SW_B_OFF 
Feature: something with groupA only
  In order to value
  As a role
  I want feature

  @gold
  Scenario: First scenario related to groupA
    Given I have something
    When I do something
    Then I get something

  @silver @sanity @SW_C_OFF 
  Scenario: Second scenario related to groupA
    Given I have something
    When I do something
    Then I get something
  