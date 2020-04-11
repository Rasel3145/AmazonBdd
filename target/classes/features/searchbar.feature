Feature: Amazon Searchbar features
Scenario Outline: As a user I should be able to enter keys into  Amazon Searchbar and search 
Given url is www.Amazon.com
When User is already on login page
And  user should locate the searchbar
And  user will click on the Amazon Searchbar
And user will be able to enter keywords into the searchbar
Then user should be able to click on the search button
And user is on the designated search page
Examples:
|Count|
| 1 |
| 2 |
#| 3	|
#| 4	|
#| 5	|
#| 6	|
#| 7	|
#| 8	|
#| 9	|
#| 10|

