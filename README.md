# ecommerce-playwright

- node
- git

# Clone repository

git clone https://github.com/Super-QAcks/ecommerce-playwright.git
cd ecommerce-playwright
git init

# Dependencies

npm install

# Playwright

npx playwright install --with-deps

# Env Variables

- check with tm8s

# Playwright Configuration

Check:

Browser settings
Base URL
Retries
Parallel execution
Reporter configuration

# Install Allure

npm install -g allure-commandline

# Run the Tests

npx playwright test

# Scripts

| Command                | What it does                                               |
| ---------------------- | ---------------------------------------------------------- |
| `npm run tests`        | Runs all tests and opens the HTML report                   |
| `npm run tests:ui`     | Opens Playwright UI mode                                   |
| `npm run tests:debug`  | Runs the tests in debug mode                               |
| `npm run flaky`        | Runs every test 100 times to look for flaky tests          |
| `npm run lint`         | Lints the `ui` folder with ESLint                          |
| `npm run typecheck`    | Checks the TypeScript types without building               |
| `npm run prettier`     | Checks formatting without changing files (also runs in CI) |
| `npm run prettier:fix` | Formats all files                                          |

The pre-commit hook formats the staged files, then runs `npm run lint` and `npm run typecheck`.

To check a single test for flakiness, use `npx playwright test <file> --repeat-each=20 --trace on`.

# Conventions

See [Page Object conventions](docs/pom-conventions.md) before adding or changing page objects, components or tests.
