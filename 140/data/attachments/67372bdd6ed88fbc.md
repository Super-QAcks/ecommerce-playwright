# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/products.spec.ts >> Products Page Tests >> Test Case 8: Verify All products and product details page
- Location: ui/tests/products.spec.ts:26:6

# Error details

```
TypeError: _productsPage.Products is not a constructor
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { HomePage } from "../pom/pages/homePage";
  3  | import { Products } from "../pom/pages/productsPage";
  4  | import { HeaderComponent } from "../pom/component/header.component";
  5  | import { URL_BASE } from "../pom/data/urls";
  6  | import { ProductDetailsPage } from "../pom/pages/productDetailsPage";
  7  | import { PRODUCT_DETAILS } from "../pom/data/products";
  8  | 
  9  | test.describe("Products Page Tests", () => {
  10 | 	let homePage: HomePage;
  11 | 	let productsPage: Products;
  12 | 	let productDetailsPage: ProductDetailsPage;
  13 | 	let headerComponent: HeaderComponent;
  14 | 
  15 | 	test.beforeEach(async ({ page }) => {
  16 | 		homePage = new HomePage(page);
> 17 | 		productsPage = new Products(page);
     |                  ^ TypeError: _productsPage.Products is not a constructor
  18 | 		productDetailsPage = new ProductDetailsPage(page);
  19 | 		headerComponent = new HeaderComponent(homePage.page);
  20 | 		await homePage.addBlocker();
  21 | 		await test.step("Navigate to the Home page", async () => {
  22 | 			await page.goto(URL_BASE);
  23 | 		});
  24 | 	});
  25 | 
  26 | 	test("Test Case 8: Verify All products and product details page", async () => {
  27 | 		const product = PRODUCT_DETAILS.default;
  28 | 		const productCard = await homePage.getProductbyName(product.name);
  29 | 		await test.step("Click on Products page header link", async () => {
  30 | 			await headerComponent.clickProductsLink();
  31 | 			await homePage.closeAdds();
  32 | 		});
  33 | 
  34 | 		await test.step("Verify that user navigated to Products page successfully", async () => {
  35 | 			await productsPage.validateProductsPage();
  36 | 		});
  37 | 
  38 | 		await test.step("Verify that products list is visible", async () => {
  39 | 			await productsPage.validateProductsList();
  40 | 		});
  41 | 
  42 | 		await test.step("Click on first product's 'View Product' link", async () => {
  43 | 			await productCard.viewProduct();
  44 | 		});
  45 | 
  46 | 		await test.step("Verify that user navigated to product details page successfully", async () => {
  47 | 			await productDetailsPage.waitForRoot();
  48 | 		});
  49 | 
  50 | 		await test.step("Verify that product details are visible", async () => {
  51 | 			await expect(productDetailsPage.productInformation).toContainText(
  52 | 				PRODUCT_DETAILS.default.name
  53 | 			);
  54 | 			await expect(productDetailsPage.productInformation).toContainText(
  55 | 				`Rs. ${PRODUCT_DETAILS.default.price}`
  56 | 			);
  57 | 			await expect(productDetailsPage.productInformation).toContainText(
  58 | 				`Availability: ${PRODUCT_DETAILS.default.availability}`
  59 | 			);
  60 | 			await expect(productDetailsPage.productInformation).toContainText(
  61 | 				`Condition: ${PRODUCT_DETAILS.default.condition}`
  62 | 			);
  63 | 			await expect(productDetailsPage.productInformation).toContainText(
  64 | 				`Brand: ${PRODUCT_DETAILS.default.brand}`
  65 | 			);
  66 | 			await expect(productDetailsPage.productInformation).toContainText(
  67 | 				`Category: ${PRODUCT_DETAILS.default.category}`
  68 | 			);
  69 | 		});
  70 | 	});
  71 | });
  72 | 
```