# 🚀 Cypress BDD & POM Framework with Azure CI/CD

This project is a **Professional Proof of Concept (PoC)** demonstrating a scalable automated testing framework. It combines **Behavior Driven Development (BDD)** with the **Page Object Model (POM)** pattern, fully integrated into an **Azure DevOps CI/CD pipeline**.

## 🌟 Key Features
* **BDD Integration:** Uses Gherkin syntax (`.feature` files) to create human-readable test scenarios.
* **Page Object Model (POM):** Enhances maintainability by separating page-specific locators and methods (see [`loginPage.js`](https://github.com/usharkollu/cypressLambda/blob/main/cypress/e2e/pages/loginPage.js)) from the test logic.
* **Data-Driven Testing:** Demonstrates how to pass different values through BDD step definitions.
* **Azure DevOps CI/CD:** Automated validation via [Azure Pipelines](https://dev.azure.com/ushakollu123/cypressLamdaTest/_build), ensuring every pull request is tested before merging.

## 🏗️ Tech Stack
* **Testing Framework:** [Cypress](https://www.cypress.io/)
* **Design Patterns:** BDD (Cucumber/Gherkin) & Page Object Model (POM)
* **CI/CD Tooling:** [Azure DevOps Pipelines](https://dev.azure.com/ushakollu123/cypressLamdaTest/)
* **Infrastructure:** [Azure App Service](https://portal.azure.com/)

## 📂 Project Structure
```text
├── azure-pipelines.yml    # Azure DevOps Pipeline configuration
├── cypress/
│   ├── e2e/
│   │   ├── features/      # Gherkin .feature files
│   │   ├── pages/         # Page Object classes (POM)
│   │   └── step_defs/     # Glue code linking Gherkin to POM
├── package.json           # Project dependencies and test scripts
└── cypress.config.js      # Cypress configuration
