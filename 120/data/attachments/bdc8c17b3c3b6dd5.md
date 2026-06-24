# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/E2E.spec.ts >> E2E Tests >> Test Case 14: Place Order: Register while Checkout
- Location: ui/tests/E2E.spec.ts:84:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#form') to be visible

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { PageFactory } from "./pageFactory";
  3  | 
  4  | export class DeletedAccountPage extends PageFactory {
  5  | 	readonly page: Page;
  6  | 	readonly deletedAccountRoot: Locator;
  7  | 	readonly accountDeletedTitle: Locator;
  8  | 	readonly accountDeletedMessage: Locator;
  9  | 	readonly continueButton: Locator;
  10 | 
  11 | 	constructor(page: Page) {
  12 | 		super(page);
  13 | 		this.page = page;
  14 | 		this.deletedAccountRoot = page.locator("#form");
  15 | 		this.accountDeletedTitle = page.getByRole("heading", {
  16 | 			name: "Account Deleted!",
  17 | 		});
  18 | 		this.accountDeletedMessage = page
  19 | 			.locator(".container")
  20 | 			.filter({ hasText: "Your account has been permanently deleted!" });
  21 | 		this.continueButton = page.getByTestId("continue-button");
  22 | 	}
  23 | 
  24 | 	async waitForRoot() {
> 25 | 		await this.deletedAccountRoot.waitFor({ state: "visible" });
     |                                 ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  26 | 	}
  27 | 
  28 | 	async clickContinue() {
  29 | 		await this.continueButton.click();
  30 | 	}
  31 | }
  32 | 
```