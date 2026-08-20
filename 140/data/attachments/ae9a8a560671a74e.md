# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/productsPage.spec.ts >> Test Case 09: Search Product
- Location: ui/tests/productsPage.spec.ts:8:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]: PRODUCT_DETAILS.default.name
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - heading "Searched Products" [level=2] [ref=e98]
  - contentinfo [ref=e99]:
    - generic [ref=e104]:
      - heading "Subscription" [level=2] [ref=e105]
      - generic [ref=e106]:
        - textbox "Your email address" [ref=e107]
        - button "" [ref=e108] [cursor=pointer]:
          - generic [ref=e109]: 
        - paragraph [ref=e110]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e114]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { HomePage } from "../pom/pages/homePage";
  3  | import { HeaderComponent } from "../pom/component/header.component";
  4  | import { ProductsPage } from "../pom/pages/productsPage";
  5  | import { URL_BASE } from "../pom/data/urls";
  6  | import { PRODUCT_DETAILS } from "../pom/data/products";
  7  | 
  8  | test("Test Case 09: Search Product", async ({ page }) => {
  9  | 	const homePage = new HomePage(page);
  10 | 	const headerComponent = new HeaderComponent(page);
  11 | 	const productsPage = new ProductsPage(page);
  12 | 
  13 | 	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
  14 | 		await homePage.goto(URL_BASE);
  15 | 	});
  16 | 
  17 | 	await test.step("Verify that home page is visible successfully", async () => {
  18 | 		await expect(homePage.validateHomePage()).toBeTruthy();
  19 | 	});
  20 | 
  21 | 	await test.step("Click on 'Products' button", async () => {
  22 | 		await headerComponent.clickProductsLink();
  23 | 	});
  24 | 
  25 | 	await test.step("Verify user is navigated to ALL PRODUCTS page successfully", async () => {
  26 | 		await productsPage.waitForProductsPage();
  27 | 	});
  28 | 
  29 | 	await test.step("Enter product name in search input and click search button", async () => {
  30 | 		await productsPage.fillSearchProduct("PRODUCT_DETAILS.default.name");
  31 | 		await productsPage.clickSearchButton();
  32 | 	});
  33 | 
  34 | 	await test.step("Verify 'SEARCHED PRODUCTS' is visible", async () => {
  35 | 		await productsPage.waitForSearchedProductsHeading();
  36 | 		await expect(productsPage.searchedProductsHeading).toBeVisible();
  37 | 	});
  38 | 
  39 | 	await test.step("Verify all the products related to search are visible", async () => {
  40 | 		const searchWord = PRODUCT_DETAILS.default.name;
  41 | 		const resultCards =
  42 | 			await productsPage.getSearchResultProductCards(searchWord);
  43 | 
> 44 | 		await expect(resultCards.length).toBeGreaterThan(0);
     |                                    ^ Error: expect(received).toBeGreaterThan(expected)
  45 | 
  46 | 		for (const productCard of resultCards) {
  47 | 			await expect(productCard.rootCard).toBeVisible();
  48 | 			await expect(productCard.productName).toContainText(searchWord, {
  49 | 				ignoreCase: true,
  50 | 			});
  51 | 		}
  52 | 	});
  53 | });
  54 | 
```