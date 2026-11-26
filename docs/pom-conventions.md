# Page Object conventions

Rules this project follows. They come from fixing real flaky tests.

## Structure

- `ui/pom/pages/`: one class per page, extending `BasePage`.
- `ui/pom/component/`: reusable parts of a page (header, footer, sidebar, product card), extending `BaseComponent`.
- `ui/pom/data/`: test data and interfaces. `ui/pom/utils/`: helpers.
- File names: `xxxPage.ts` for pages, `xxx.component.ts` for components, `xxx.spec.ts` for tests.

## Locators

- Prefer `getByRole`, `getByTestId` and `getByText` over CSS selectors.
- A component scopes every locator to its root (`this.root.getByRole(...)`), never to `page`. This avoids strict-mode violations when the same text appears elsewhere on the page.
- Use `exact: true` when a name is a substring of other elements (for example the "Test Cases" heading).
- Never use `force: true`. If Playwright reports that another element intercepts pointer events, find that element and fix the cause.
- Never use `waitForTimeout`.

## Waiting

- Call `waitForPageScripts()` (from `BasePage`) in a page's `waitForRoot()` or before clicking elements that depend on page scripts (forms, modals, submit buttons). Clicking before the scripts load causes native submits and swallowed clicks.
- `locator.isVisible()` does not wait. Do not use it as a wait or an assertion; use `waitFor()` or `expect(...).toBeVisible()`.

## Assertions

- Assertions live in the tests, not in page objects. Page objects expose locators and actions.
- The only `expect` allowed in a page object is inside a method whose purpose is waiting.
- Methods named `validateX` that do not assert are not allowed.

## Test data

- Use `satisfies` instead of `as` for typed constants, so types keep their exact fields.

## Checks

- `npm run typecheck`, `npm run lint` and `npm run prettier` run in CI.
- The pre-commit hook runs `lint-staged` (Prettier on staged files), `npm run lint` and `npm run typecheck`.
- For flaky tests, reproduce with `npx playwright test <file> --repeat-each=20 --trace on` before changing code.
