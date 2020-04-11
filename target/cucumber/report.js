$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchbar.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Searchbar features",
  "description": "",
  "id": "amazon-searchbar-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "As a user I should be able to enter keys into  Amazon Searchbar and search",
  "description": "",
  "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "url is www.Amazon.com",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should locate the searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user will click on the Amazon Searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will be able to enter keywords into the searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to click on the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the designated search page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search;",
  "rows": [
    {
      "cells": [
        "Count"
      ],
      "line": 11,
      "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 12,
      "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 13,
      "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "As a user I should be able to enter keys into  Amazon Searchbar and search",
  "description": "",
  "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "url is www.Amazon.com",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should locate the searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user will click on the Amazon Searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will be able to enter keywords into the searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to click on the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the designated search page",
  "keyword": "And "
});
formatter.match({
  "location": "SearchbarStepDefinition.url_is_www_Amazon_com()"
});
formatter.result({
  "duration": 46414416683,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 1031950860,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_should_locate_the_searchbar()"
});
formatter.result({
  "duration": 1182832993,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_will_click_on_the_Amazon_Searchbar()"
});
formatter.result({
  "duration": 789477281,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_will_be_able_to_enter_keywords_into_the_searchbar()"
});
formatter.result({
  "duration": 980912507,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_should_be_able_to_click_on_the_search_button()"
});
formatter.result({
  "duration": 4582348615,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_is_on_the_designated_search_page()"
});
formatter.result({
  "duration": 189267806,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cAmazon.com[ ]: samsung mobile\u003e but was:\u003cAmazon.com[]: samsung mobile\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinitions.SearchbarStepDefinition.user_is_on_the_designated_search_page(SearchbarStepDefinition.java:60)\n\tat ✽.And user is on the designated search page(searchbar.feature:9)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I should be able to enter keys into  Amazon Searchbar and search",
  "description": "",
  "id": "amazon-searchbar-features;as-a-user-i-should-be-able-to-enter-keys-into--amazon-searchbar-and-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "url is www.Amazon.com",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should locate the searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user will click on the Amazon Searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will be able to enter keywords into the searchbar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be able to click on the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the designated search page",
  "keyword": "And "
});
formatter.match({
  "location": "SearchbarStepDefinition.url_is_www_Amazon_com()"
});
formatter.result({
  "duration": 9036830907,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 13542752,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_should_locate_the_searchbar()"
});
formatter.result({
  "duration": 88440865,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_will_click_on_the_Amazon_Searchbar()"
});
formatter.result({
  "duration": 2942410440,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_will_be_able_to_enter_keywords_into_the_searchbar()"
});
formatter.result({
  "duration": 2520834619,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_should_be_able_to_click_on_the_search_button()"
});
formatter.result({
  "duration": 4032341515,
  "status": "passed"
});
formatter.match({
  "location": "SearchbarStepDefinition.user_is_on_the_designated_search_page()"
});
formatter.result({
  "duration": 1756096705,
  "status": "passed"
});
});