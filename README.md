# Automated Testing POC Instructions

## Problem solved:

This test automation solution is a POC to implement the BDD automated testing of the web applications.
The Application Under Test(AUT) for this POC is Sauce Demo portal https://www.saucedemo.com.
The test scenarios covered are - Login page, header section, footer section and dashboardpage


## Technologies used:

1. Javascript.
2. [Node.js](https://nodejs.org/) v18.6.0 javascript execution engine.
3. [Cypress.io](https://webdriver.io/) is a next generation front end testing tool built for the modern web.
4. [Cucumber](https://cucumber.io/) which helps us to create BDD framework with cypress.io.
5. [Allure Reporter](https://allurereport.org/docs/) to translate Cucumber JSON test report to HTML test report.
6. [eslint](https://eslint.org/) to find and fix problems with your JavaScript code.
7. [prettier](https://www.npmjs.com/package/prettier) to enforces a uniform code style across teams.
8. [husky](https://www.npmjs.com/package/husky) makes it easy to add Git hooks to your project.

## Opening and Setting up Project:

1.  [Visual Studio Code](https://code.visualstudio.com/) (vscode) used as IDE to develop this solution.
2.  To open the project in vscode, go to File -> Open Folder then locate and select the project folder and click Select Folder button.
3.  To install project dependencies, open the Terminal or Command Prompt and go to the project folder and run the following command -

        npm install

    (live internet connection required to install these dependencies and make sure node.js is installed and included in PATH environment variable.)


### Running Tests:

Open the Terminal or Command Prompt and go to Directory  and run below command:

 #### For running the scenarios on browser

  ```sh
   npx cypresss open
   ```

#### For running the scenarios on headless mode

   ```sh
   npm run cypress:headless
   ```

#### For running the scenarios using tag

   ```sh
   npm run cypress:execution-tags
   ```

#### For running the smoke suite using tag

   ```sh
   npm run cypress:smoke
   ```

#### For showing the report after the execution of scenario
   ```sh
   npm run aftertest
   ```

#### For executing the report after the test run

  ```sh
  npm run tests
  ```

#### For doing the formatting in the project

  ```sh
  npm run format
  ```
#### For running the testcases parallelly

  ```sh
  npm run cypress:parallel
  ```
