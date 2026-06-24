# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/cart.spec.ts >> Cart Test Cases >> Test Case 11: Verify Subscription in Cart page
- Location: ui/tests/cart.spec.ts:12:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#header') to be visible

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { URL_PRODUCTS } from "../data/urls";
  3  | 
  4  | export class HeaderComponent {
  5  | 	readonly headerRoot: Locator;
  6  | 	readonly contactUs: Locator;
  7  | 	readonly cart: Locator;
  8  | 	readonly signUpLogin: Locator;
  9  | 	readonly productsLink: Locator;
  10 | 	readonly testCasesLink: Locator;
  11 | 	readonly page: Page;
  12 | 	readonly logout: Locator;
  13 | 	readonly deleteAccount: Locator;
  14 | 	readonly loggedUserName: Locator;
  15 | 
  16 | 	constructor(page: Page) {
  17 | 		this.page = page;
  18 | 		this.headerRoot = page.locator("#header");
  19 | 		this.contactUs = page.getByRole("link", { name: "Contact Us" });
  20 | 		this.logout = page.getByRole("link", { name: "Logout" });
  21 | 		this.deleteAccount = page.getByRole("link", { name: "Delete Account" });
  22 | 		this.cart = page.getByRole("link", { name: "Cart" });
  23 | 		this.signUpLogin = page.getByRole("link", { name: "Signup / Login" });
  24 | 		this.productsLink = page.getByRole("link", { name: /Products/i });
  25 | 		this.testCasesLink = page.getByRole("link", { name: " Test Cases" });
  26 | 		this.loggedUserName = page.getByText("Logged in as").locator("b");
  27 | 	}
  28 | 
  29 | 	async waitForRoot() {
> 30 | 		await this.headerRoot.waitFor({ state: "visible" });
     |                         ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  31 | 	}
  32 | 
  33 | 	async clickContactUs() {
  34 | 		this.waitForRoot();
  35 | 		await this.contactUs.click();
  36 | 	}
  37 | 
  38 | 	async clickSignUpLogin() {
  39 | 		this.waitForRoot();
  40 | 		await this.signUpLogin.click();
  41 | 	}
  42 | 
  43 | 	async clickProductsLink() {
  44 | 		await this.productsLink.waitFor({ state: "visible", timeout: 10000 });
  45 | 		await this.productsLink.click({ force: true });
  46 | 		if (this.page.url().includes("#google_vignette")) {
  47 | 			await this.page.goto(URL_PRODUCTS);
  48 | 		}
  49 | 	}
  50 | 
  51 | 	async clickTestCasesLink() {
  52 | 		await this.testCasesLink.click({ force: true });
  53 | 	}
  54 | 
  55 | 	async clickCart() {
  56 | 		this.waitForRoot();
  57 | 		await this.cart.click();
  58 | 	}
  59 | 
  60 | 	async clickLogout() {
  61 | 		this.waitForRoot();
  62 | 		await this.logout.click();
  63 | 	}
  64 | 
  65 | 	async clickDeleteAccount() {
  66 | 		this.waitForRoot();
  67 | 		await this.deleteAccount.click();
  68 | 	}
  69 | }
  70 | 
```