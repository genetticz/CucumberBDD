$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4172319805,
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
  "duration": 2063845267,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 396449563,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 29684447,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 100321258,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 32383064,
  "status": "passed"
});
formatter.after({
  "duration": 94109060,
  "status": "passed"
});
formatter.before({
  "duration": 2682952523,
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
  "duration": 413178630,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cli id\u003d\"accountNav-signIn\" class\u003d\"NavigationListItem-ljyubl-0 iiakgv\"\u003e...\u003c/li\u003e is not clickable at point (1000, 55). Other element would receive the click: \u003cinput type\u003d\"search\" id\u003d\"search\" name\u003d\"searchTerm\" autocorrect\u003d\"off\" autocapitalize\u003d\"off\" autocomplete\u003d\"off\" value\u003d\"\" placeholder\u003d\"Search\" aria-label\u003d\"Search: suggestions appear below\"\u003e\n  (Session info: chrome\u003d83.0.4103.97)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.15.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 46 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Michaels-MBP\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53311}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8), userDataDir\u003d/var/folders/c2/6gn_pl295r18l94h9l3_jy4w0000gn/T/.org.chromium.Chromium.yfMqWj}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.97, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 34b98c41b62e83e755d265692f6e1114\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat objects.TargetHome.clickSignOn(TargetHome.java:84)\n\tat stepDefinitions.LoginSteps.user_is_on_the_login_page(LoginSteps.java:21)\n\tat ✽.Given user is on the login page(login.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 134753799,
  "status": "passed"
});
});