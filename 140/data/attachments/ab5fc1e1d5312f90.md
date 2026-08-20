# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/loging.spec.ts >> Login Page Tests >> should log out successfully
- Location: ui/tests/loging.spec.ts:10:14

# Error details

```
Test timeout of 30000ms exceeded while setting up "loginPage".
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.login-form') to be visible

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { PageFactory } from "./pageFactory";
  3  | 
  4  | export class LoginPage extends PageFactory {
  5  | 	public loginFormRoot: Locator;
  6  | 	readonly loginFormTitle: Locator;
  7  | 	private readonly emailInput: Locator;
  8  | 	private readonly passwordInput: Locator;
  9  | 	private readonly loginButton: Locator;
  10 | 	private readonly errorMessage: Locator;
  11 | 
  12 | 	readonly signUpFormRoot: Locator;
  13 | 	readonly signUpFormTitle: Locator;
  14 | 	readonly signUpNameInput: Locator;
  15 | 	readonly signUpEmailInput: Locator;
  16 | 	readonly signUpButton: Locator;
  17 | 	readonly signUpErrorMessage: Locator;
  18 | 
  19 | 	constructor(page: Page) {
  20 | 		super(page);
  21 | 		this.loginFormRoot = page.locator(".login-form");
  22 | 		this.loginFormTitle = page.getByRole("heading", {
  23 | 			name: "Login to your account",
  24 | 		});
  25 | 		this.emailInput = page.getByTestId("login-email");
  26 | 		this.passwordInput = page.getByTestId("login-password");
  27 | 		this.loginButton = page.getByTestId("login-button");
  28 | 		this.errorMessage = page.getByText("Your email or password is incorrect!");
  29 | 
  30 | 		this.signUpFormRoot = page.locator(".signup-form");
  31 | 		this.signUpFormTitle = page.getByRole("heading", {
  32 | 			name: "New User Signup!",
  33 | 		});
  34 | 		this.signUpNameInput = page.getByTestId("signup-name");
  35 | 		this.signUpEmailInput = page.getByTestId("signup-email");
  36 | 		this.signUpButton = page.getByTestId("signup-button");
  37 | 		this.signUpErrorMessage = page.getByText("Email Address already exist!");
  38 | 	}
  39 | 
  40 | 	async waitForRoot() {
> 41 | 		await this.loginFormRoot.waitFor({ state: "visible" });
     |                            ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  42 | 	}
  43 | 
  44 | 	async waitForSignUpRoot() {
  45 | 		await this.signUpFormRoot.waitFor({ state: "visible" });
  46 | 	}
  47 | 
  48 | 	async login(username: string, password: string) {
  49 | 		await this.emailInput.fill(username);
  50 | 		await this.passwordInput.fill(password);
  51 | 		await this.loginButton.click();
  52 | 	}
  53 | 
  54 | 	async signUp(name: string, email: string) {
  55 | 		await this.signUpNameInput.fill(name);
  56 | 		await this.signUpEmailInput.fill(email);
  57 | 		await this.signUpButton.click();
  58 | 	}
  59 | 
  60 | 	async waitForSingUpErrorMessage() {
  61 | 		await this.signUpErrorMessage.waitFor({ state: "visible" });
  62 | 	}
  63 | 
  64 | 	async getSignUpErrorMessage() {
  65 | 		return this.signUpErrorMessage.textContent();
  66 | 	}
  67 | 
  68 | 	async waitForErrorMessage() {
  69 | 		await this.errorMessage.waitFor({ state: "visible" });
  70 | 	}
  71 | 
  72 | 	async getErrorMessage() {
  73 | 		return this.errorMessage.textContent();
  74 | 	}
  75 | 
  76 | 	async logout() {
  77 | 		await this.page.getByText(/logout/i).click({ force: true });
  78 | 	}
  79 | }
  80 | 
```