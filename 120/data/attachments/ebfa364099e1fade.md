# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/loging.spec.ts >> Test Case 2: Login User with correct email and password
- Location: ui/tests/loging.spec.ts:21:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByText('Logged in as').locator('b')
Expected substring: "Juan"
Received string:    "Test Dummy"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByText('Logged in as').locator('b')
    14 × locator resolved to <b>Test Dummy</b>
       - unexpected value "Test Dummy"

```

```yaml
- text: Test Dummy
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { test as LoginFixture } from "./helpers/loginFixture";
  3  | import { LoginPage } from "../pom/pages/loginPage";
  4  | import { HomePage } from "../pom/pages/homePage";
  5  | import { HeaderComponent } from "../pom/component/header.component";
  6  | import { URL_BASE } from "../pom/data/urls";
  7  | import { LOGIN_CREDENTIALS } from "../pom/data/credentials";
  8  | 
  9  | LoginFixture.describe("Login Page Tests", () => {
  10 | 	LoginFixture("should log out successfully", async ({ loginPage }) => {
  11 | 		LoginFixture.step("Click on Logout link", async () => {
  12 | 			await loginPage.logout();
  13 | 		});
  14 | 
  15 | 		LoginFixture.step("Validate successful logout", async () => {
  16 | 			await loginPage.waitForRoot();
  17 | 		});
  18 | 	});
  19 | });
  20 | 
  21 | test("Test Case 2: Login User with correct email and password", async ({
  22 | 	page,
  23 | }) => {
  24 | 	const homePage = new HomePage(page);
  25 | 	const headercomponent = new HeaderComponent(page);
  26 | 	const loginPage = new LoginPage(page);
  27 | 
  28 | 	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
  29 | 		await homePage.goto(URL_BASE);
  30 | 	});
  31 | 
  32 | 	await test.step("Verify that home page is visible successfully", async () => {
  33 | 		await homePage.waitForRoot();
  34 | 	});
  35 | 
  36 | 	await test.step("Click on 'Signup / Login' button", async () => {
  37 | 		await headercomponent.clickSignUpLogin();
  38 | 	});
  39 | 
  40 | 	await test.step("Verify 'Login to your account' is visible", async () => {
  41 | 		await expect(loginPage.loginFormTitle).toBeVisible();
  42 | 	});
  43 | 
  44 | 	await test.step("Enter correct email address and password and Click 'login' button", async () => {
  45 | 		await loginPage.login(
  46 | 			LOGIN_CREDENTIALS.STANDARD_USER,
  47 | 			LOGIN_CREDENTIALS.PASSWORD
  48 | 		);
  49 | 	});
  50 | 
  51 | 	await test.step("Verify that 'Logged in as username' is visible", async () => {
> 52 | 		await expect(headercomponent.loggedUserName).toContainText(
     |                                                ^ Error: expect(locator).toContainText(expected) failed
  53 | 			LOGIN_CREDENTIALS.NAME_USER
  54 | 		);
  55 | 	});
  56 | });
  57 | 
  58 | test("Test Case 3: Login User with incorrect email and password: ", async ({
  59 | 	page,
  60 | }) => {
  61 | 	const homePage = new HomePage(page);
  62 | 	const headercomponent = new HeaderComponent(page);
  63 | 	const loginPage = new LoginPage(page);
  64 | 	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
  65 | 		await homePage.goto(URL_BASE);
  66 | 	});
  67 | 
  68 | 	await test.step("Verify that home page is visible successfully", async () => {
  69 | 		await homePage.waitForRoot();
  70 | 	});
  71 | 
  72 | 	await test.step("Click on 'Signup / Login' button", async () => {
  73 | 		await headercomponent.clickSignUpLogin();
  74 | 	});
  75 | 
  76 | 	await test.step("Verify 'Login to your account' is visible", async () => {
  77 | 		await expect(loginPage.loginFormTitle).toBeVisible();
  78 | 	});
  79 | 
  80 | 	await test.step("Enter incorrect email address and password and click 'login' button", async () => {
  81 | 		await loginPage.login(
  82 | 			LOGIN_CREDENTIALS.INVALID_USER,
  83 | 			LOGIN_CREDENTIALS.INVALID_PASSWORD
  84 | 		);
  85 | 	});
  86 | 
  87 | 	await test.step("Verify error 'Your email or password is incorrect!' is visible", async () => {
  88 | 		expect(await loginPage.getErrorMessage()).toContain(
  89 | 			"Your email or password is incorrect!"
  90 | 		);
  91 | 	});
  92 | });
  93 | 
```