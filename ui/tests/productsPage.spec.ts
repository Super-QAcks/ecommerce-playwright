import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { HeaderComponent } from "../pom/component/header.component";
import { ProductsPage } from "../pom/pages/productsPage";
import { URL_BASE } from "../pom/data/urls";
import { PRODUCT_DETAILS } from "../pom/data/products";

test("Test Case 09: Search Product", async ({ page }) => {
	const homePage = new HomePage(page);
	const headerComponent = new HeaderComponent(page);
	const productsPage = new ProductsPage(page);

	// 1. Launch browser
	// 2. Navigate to url 'http://automationexercise.com'
	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
		await homePage.goto(URL_BASE);
	});
	// 3. Verify that home page is visible successfully
	await test.step("Verify that home page is visible successfully", async () => {
		await expect(homePage.validateHomePage()).toBeTruthy();
	});

	// 4. Click on 'Products' button
	await test.step("Click on 'Products' button", async () => {
		await headerComponent.clickProductsLink();
	});

	// 5. Verify user is navigated to ALL PRODUCTS page successfully
	await test.step("Verify user is navigated to ALL PRODUCTS page successfully", async () => {
		await productsPage.waitForProductsPage();
	});

	// 6. Enter product name in search input and click search button
	await test.step("Enter product name in search input and click search button", async () => {
		await productsPage.fillSearchProduct("PRODUCT_DETAILS.default.name");
		await productsPage.clickSearchButton();
	});

	// 7. Verify 'SEARCHED PRODUCTS' is visible
	await test.step("Verify 'SEARCHED PRODUCTS' is visible", async () => {
		await productsPage.waitForSearchedProductsHeading();
		await expect(productsPage.searchedProductsHeading).toBeVisible();
	});

	// 8. Verify all the products related to search are visible
	await test.step("Verify all the products related to search are visible", async () => {
		const searchWord = PRODUCT_DETAILS.default.name;
		const resultCards =
			await productsPage.getSearchResultProductCards(searchWord);

		await expect(resultCards.length).toBeGreaterThan(0);

		for (const productCard of resultCards) {
			await expect(productCard.rootCard).toBeVisible();
			await expect(productCard.productName).toContainText(searchWord, {
				ignoreCase: true,
			});
		}
	});
});
