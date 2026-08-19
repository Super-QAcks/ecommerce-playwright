# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/home.spec.ts >> Home Page Tests. >> Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality: 
- Location: ui/tests/home.spec.ts:15:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.single-widget')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.single-widget')

```

```yaml
- text: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { HomePage } from "../pom/pages/homePage";
  3  | import { FooterComponent } from "../pom/component/footeer.component";
  4  | import { URL_BASE } from "../pom/data/urls";
  5  | 
  6  | test.describe("Home Page Tests.", async () => {
  7  | 	let homePage: HomePage;
  8  | 	let footerComponent: FooterComponent;
  9  | 
  10 | 	test.beforeEach(async ({ page }) => {
  11 | 		homePage = new HomePage(page);
  12 | 		footerComponent = new FooterComponent(page);
  13 | 	});
  14 | 
  15 | 	test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality: ", async ({
  16 | 		page,
  17 | 	}) => {
  18 | 		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
  19 | 			await homePage.goto(URL_BASE);
  20 | 		});
  21 | 
  22 | 		await test.step("Verify that home page is visible successfully", async () => {
  23 | 			await homePage.waitForRoot();
  24 | 		});
  25 | 
  26 | 		await test.step("Scroll down page to bottom", async () => {
  27 | 			await page.evaluate(() => {
  28 | 				window.scrollTo(0, document.body.scrollHeight);
  29 | 			});
  30 | 		});
  31 | 
  32 | 		await test.step("Verify 'SUBSCRIPTION' is visible", async () => {
> 33 | 			await expect(footerComponent.titleWidget).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  34 | 		});
  35 | 
  36 | 		await test.step("Click on arrow at bottom right side to move upward", async () => {
  37 | 			await homePage.clickScrollUp();
  38 | 		});
  39 | 
  40 | 		await test.step("Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", async () => {
  41 | 			await expect(homePage.activeSliderH2).toBeVisible();
  42 | 		});
  43 | 	});
  44 | 
  45 | 	test("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async ({
  46 | 		page,
  47 | 	}) => {
  48 | 		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
  49 | 			await homePage.goto(URL_BASE);
  50 | 		});
  51 | 
  52 | 		await test.step("Verify that home page is visible successfully", async () => {
  53 | 			await homePage.waitForRoot();
  54 | 		});
  55 | 
  56 | 		await test.step("Scroll down page to bottom", async () => {
  57 | 			await page.evaluate(() => {
  58 | 				window.scrollTo(0, document.body.scrollHeight);
  59 | 			});
  60 | 		});
  61 | 
  62 | 		await test.step("Verify 'SUBSCRIPTION' is visible", async () => {
  63 | 			await expect(footerComponent.titleWidget).toBeVisible();
  64 | 		});
  65 | 
  66 | 		await test.step("Scroll up page to top", async () => {
  67 | 			await page.evaluate(() => {
  68 | 				window.scrollTo(0, 0);
  69 | 			});
  70 | 		});
  71 | 
  72 | 		await test.step("Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", async () => {
  73 | 			await expect(homePage.activeSliderH2).toBeVisible();
  74 | 		});
  75 | 	});
  76 | });
  77 | 
```