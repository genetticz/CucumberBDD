$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3398768822,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 7,
  "name": "user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "there should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 2307194374,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 482566569,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 22234735,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 111696401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 57107451,
  "status": "passed"
});
formatter.after({
  "duration": 146708313,
  "status": "passed"
});
formatter.before({
  "duration": 4214995026,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "There should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1598478207,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 303615013,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 121856584,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 376881726,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 19327475627,
  "error_message": "java.lang.NullPointerException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat objects.TargetSignin.incorrectPassErr(TargetSignin.java:48)\n\tat stepDefinitions.LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access(LoginSteps.java:59)\n\tat ✽.And There should be an error, and user should not be granted access(login.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "duration": 112031175,
  "status": "passed"
});
});