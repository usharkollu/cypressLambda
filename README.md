# 🚀 Cypress BDD Test Framework with Azure CI/CD

This project serves as a **Proof of Concept (PoC)** to demonstrate a modern, scalable **Behavior Driven Development (BDD)** testing framework. It utilizes Cypress with Cucumber integration and is fully automated via **Azure Pipelines** for continuous integration.

## 🌟 Key Features
* **BDD Approach:** Uses Gherkin syntax (`.feature` files) to bridge the gap between technical and non-technical stakeholders.
* **Data-Driven Testing:** Showcases the use of different test values and environment configurations.
* **Azure DevOps Integration:** Features a fully functional CI/CD pipeline that triggers on every push to validate code quality.
* **Cloud Reporting:** Artifacts and test results are captured and stored within the [Azure Pipeline Runs](https://dev.azure.com/ushakollu123/cypressLamdaTest/_build).

## 🏗️ Tech Stack
* **Testing Framework:** [Cypress](https://www.cypress.io/)
* **BDD Plugin:** Cypress-Cucumber-Preprocessor
* **Runtime:** Node.js 20.x
* **CI/CD:** [Azure DevOps Pipelines](https://dev.azure.com/ushakollu123/cypressLamdaTest/)
* **Cloud Hosting:** [Azure App Service](https://portal.azure.com/)

## 📂 Project Structure
```text
├── azure-pipelines.yml    # Main CI/CD configuration for Azure DevOps
├── cypress/
│   ├── e2e/               # Feature files and step definitions
│   └── support/           # Custom commands and global hooks
├── package.json           # Scripts and dependencies
└── cypress.config.js      # Cypress environment settings
