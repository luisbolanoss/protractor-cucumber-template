# protractor-cucumber-template
This project sets and uses the protractor-cucumber-framework to BBD with cucumber and protractor

## Install dependencies
In order to install dependencies execute the following command.

```sh
npm install
```

## First Run Selenium Grid

### Download the browser drives

Browsers Drivers
- [chrome](http://chromedriver.chromium.org/downloads)
- [firefox](https://github.com/mozilla/geckodriver/releases)

### Run the Selenium Grid hub and nodes

```sh
java -Dwebdriver.chrome.driver=chromedriver -Dwebdriver.firefox.driver=geckodriver -jar selenium-server-standalone-3.141.59.jar -role hub
```

```sh
java -jar selenium-server-standalone-3.141.59.jar -role node  -hub http://localhost:4444/grid/register
```

## Run the test
In order to run tests execute the following command.

```sh
npm test
```
