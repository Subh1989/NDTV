$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Weather.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the weather details of a city",
  "description": "",
  "id": "validate-the-weather-details-of-a-city",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify user lands on the NDTV home page",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verify-user-lands-on-the-ndtv-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@HomePageValidation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Initialize the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to the NDTV home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to validate whether the NDTV logo is displaying or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.initialize_the_chrome_browser()"
});
formatter.result({
  "duration": 6027871700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_navigates_to_the_NDTV_home_page()"
});
formatter.result({
  "duration": 3013121000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_should_be_able_to_validate_whether_the_NDTV_logo_is_displaying_or_not()"
});
formatter.result({
  "duration": 393663500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_closes_the_browser()"
});
formatter.result({
  "duration": 702300900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verfiy user clicks the Weather link in the NDTV home page",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-clicks-the-weather-link-in-the-ndtv-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@WeatherLinkValidation"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Initialize the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user navigates to the NDTV home page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able to click on the WEATHER link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.initialize_the_chrome_browser()"
});
formatter.result({
  "duration": 5167436900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_navigates_to_the_NDTV_home_page()"
});
formatter.result({
  "duration": 2639859200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_should_be_able_to_click_on_the_weather_link()"
});
formatter.result({
  "duration": 3714251200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_closes_the_browser()"
});
formatter.result({
  "duration": 804214900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verfiy user checks the weather details of a city",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@WeatherDetailsValidation"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Initialize the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user navigates to the NDTV home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user should be able to click on the WEATHER link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user enters the \u003ccity\u003e and checks if it is displayed and selected",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user verifies that the \u003ccity\u003e is available on the map and clicks on it to display the weather details",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user saves the temperature in degrees",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;",
  "rows": [
    {
      "cells": [
        "city"
      ],
      "line": 29,
      "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;;1"
    },
    {
      "cells": [
        "Bengaluru"
      ],
      "line": 30,
      "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Verfiy user checks the weather details of a city",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@WeatherDetailsValidation"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Initialize the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user navigates to the NDTV home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user should be able to click on the WEATHER link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user enters the Bengaluru and checks if it is displayed and selected",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user verifies that the Bengaluru is available on the map and clicks on it to display the weather details",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user saves the temperature in degrees",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.initialize_the_chrome_browser()"
});
formatter.result({
  "duration": 5174408400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_navigates_to_the_NDTV_home_page()"
});
formatter.result({
  "duration": 2723907700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_should_be_able_to_click_on_the_weather_link()"
});
formatter.result({
  "duration": 3530280900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_enters_the_and_checks_if_it_is_displayed_and_selected(String)"
});
formatter.result({
  "duration": 961411200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 23
    }
  ],
  "location": "StepDefination.user_verifies_that_the_is_available_on_the_map_and_clicks_on_it_to_display_the_weather_details(String)"
});
formatter.result({
  "duration": 117052200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_saves_the_temperature_in_degrees()"
});
formatter.result({
  "duration": 25672100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_closes_the_browser()"
});
formatter.result({
  "duration": 748746500,
  "status": "passed"
});
formatter.uri("WeatherAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the weather details of a city",
  "description": "",
  "id": "validate-the-weather-details-of-a-city",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verfiy user checks the weather details of a city",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User passes cityname \u003ccity\u003e and appid \u003cappid\u003e to the Request URI.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user calls \"GETWeatherAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API call should be successfull and the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user saves the temperature in degrees Celsius",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;",
  "rows": [
    {
      "cells": [
        "city",
        "appid"
      ],
      "line": 12,
      "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;;1"
    },
    {
      "cells": [
        "Bengaluru",
        "7fe67bf08c80ded756e598d6f8fedaea"
      ],
      "line": 13,
      "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verfiy user checks the weather details of a city",
  "description": "",
  "id": "validate-the-weather-details-of-a-city;verfiy-user-checks-the-weather-details-of-a-city;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User passes cityname Bengaluru and appid 7fe67bf08c80ded756e598d6f8fedaea to the Request URI.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user calls \"GETWeatherAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API call should be successfull and the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user saves the temperature in degrees Celsius",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 21
    },
    {
      "val": "7fe67bf08c80ded756e598d6f8fedaea",
      "offset": 41
    }
  ],
  "location": "StepDefination.user_passes_cityname_and_appid_to_the_request_uri(String,String)"
});
formatter.result({
  "duration": 4082400,
  "error_message": "java.lang.NoClassDefFoundError: groovy/lang/GroovyObject\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:347)\r\n\tat stepDefinations.StepDefination.user_passes_cityname_and_appid_to_the_request_uri(StepDefination.java:87)\r\n\tat ✽.Given User passes cityname Bengaluru and appid 7fe67bf08c80ded756e598d6f8fedaea to the Request URI.(WeatherAPI.feature:4)\r\nCaused by: java.lang.ClassNotFoundException: groovy.lang.GroovyObject\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:347)\r\n\tat stepDefinations.StepDefination.user_passes_cityname_and_appid_to_the_request_uri(StepDefination.java:87)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "GETWeatherAPI",
      "offset": 12
    },
    {
      "val": "GET",
      "offset": 33
    }
  ],
  "location": "StepDefination.user_calls_something_with_something_http_request(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.the_api_call_should_be_successfull_and_the_status_code_should_be_200()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.user_saves_the_temperature_in_degrees_celsius()"
});
formatter.result({
  "status": "skipped"
});
});