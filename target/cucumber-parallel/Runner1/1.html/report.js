$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("YourLagaTestSuite.feature");
formatter.feature({
  "line": 1,
  "name": "Login to YourLaga website and ADD for multiple products and validate products",
  "description": "",
  "id": "login-to-yourlaga-website-and-add-for-multiple-products-and-validate-products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add Multiple products to Basket",
  "description": "",
  "id": "login-to-yourlaga-website-and-add-for-multiple-products-and-validate-products;add-multiple-products-to-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "i QuickView an item",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i change item size to \"\u003cSize\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i click on AddToCart button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click Continue shopping button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i click on secondItem quickView and addToCart",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-to-yourlaga-website-and-add-for-multiple-products-and-validate-products;add-multiple-products-to-basket;",
  "rows": [
    {
      "cells": [
        "Size"
      ],
      "line": 16,
      "id": "login-to-yourlaga-website-and-add-for-multiple-products-and-validate-products;add-multiple-products-to-basket;;1"
    },
    {
      "cells": [
        "M"
      ],
      "line": 17,
      "id": "login-to-yourlaga-website-and-add-for-multiple-products-and-validate-products;add-multiple-products-to-basket;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7837807200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login to YourLaga",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I login to YourLaga",
  "keyword": "Given "
});
formatter.match({
  "location": "Yourlaga.i_login_to_YourLaga()"
});
formatter.result({
  "duration": 9738000600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Add Multiple products to Basket",
  "description": "",
  "id": "login-to-yourlaga-website-and-add-for-multiple-products-and-validate-products;add-multiple-products-to-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@AddProducts"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "i QuickView an item",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i change item size to \"M\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i click on AddToCart button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click Continue shopping button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i click on secondItem quickView and addToCart",
  "keyword": "Then "
});
formatter.match({
  "location": "Yourlaga.i_QuickView_an_item()"
});
formatter.result({
  "duration": 5173638100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 23
    }
  ],
  "location": "Yourlaga.i_change_item_size_to(String)"
});
formatter.result({
  "duration": 3593190300,
  "status": "passed"
});
formatter.match({
  "location": "Yourlaga.i_click_on_AddToCart_button()"
});
formatter.result({
  "duration": 1237664300,
  "status": "passed"
});
formatter.match({
  "location": "Yourlaga.click_Continue_shopping_button()"
});
formatter.result({
  "duration": 1058510600,
  "status": "passed"
});
formatter.match({
  "location": "Yourlaga.i_click_on_secondItem_quickView_and_addToCart()"
});
formatter.result({
  "duration": 6027517800,
  "status": "passed"
});
formatter.after({
  "duration": 2072270000,
  "error_message": "java.lang.AssertionError: Error occured while native click on signOutBtn\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat utilities.UserActions.nativeClick(UserActions.java:79)\r\n\tat pages.LoggedInHomePage.logOut(LoggedInHomePage.java:121)\r\n\tat stepdefination.Hooks.projectLast(Hooks.java:50)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
});