import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { HeaderComponent } from "../pom/component/header.component";
import { ProductsPage } from "../pom/pages/productsPage";
import { URL_BASE } from "../pom/data/urls";
import { PRODUCT_DETAILS, PRODUCT_CATEGORIES } from "../pom/data/products";
import { SideBarComponent } from "../pom/component/sideBar.component";

test("Test Case 09: Search Product", async ({ page }) => {
	const homePage = new HomePage(page);
	const headerComponent = new HeaderComponent(page);
	const productsPage = new ProductsPage(page);

	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
		await homePage.goto(URL_BASE);
	});

	await test.step("Verify that home page is visible successfully", async () => {
		await expect(homePage.validateHomePage()).toBeTruthy();
	});

	await test.step("Click on 'Products' button", async () => {
		await headerComponent.clickProductsLink();
	});

	await test.step("Verify user is navigated to ALL PRODUCTS page successfully", async () => {
		await productsPage.waitForProductsPage();
	});

	await test.step("Enter product name in search input and click search button", async () => {
		await productsPage.fillSearchProduct(PRODUCT_DETAILS.default.name);
		await productsPage.clickSearchButton();
	});

	await test.step("Verify 'SEARCHED PRODUCTS' is visible", async () => {
		await productsPage.waitForSearchedProductsHeading();
		await expect(productsPage.searchedProductsHeading).toBeVisible();
	});

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

test("Test Case 18: View Category Products", async ({ page }) => {
	const homePage = new HomePage(page);
	const sideBarComponent = new SideBarComponent(page);

	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
		await homePage.goto(URL_BASE);
	});

	await test.step("Verify that categories are visible on left side bar", async () => {
		await sideBarComponent.waitForSideBar();
	});

	await test.step("Click on 'Women' category", async () => {
		await sideBarComponent.expandCategory(PRODUCT_CATEGORIES.women.id);
	});

	await test.step("Click on any category link under 'Women' category, for example: Tops", async () => {
		await sideBarComponent.selectSubCategory(
			PRODUCT_CATEGORIES.women.id,
			PRODUCT_CATEGORIES.women.subCategories.tops.id
		);
	});

	await test.step("Verify category page heading", async () => {
		await expect(page.locator("h2.title.text-center")).toContainText(
			PRODUCT_CATEGORIES.women.id
		);
	});

	await test.step("On left side bar, click on any sub-category link of 'Men' category", async () => {
		await sideBarComponent.selectSubCategory(
			PRODUCT_CATEGORIES.men.id,
			PRODUCT_CATEGORIES.men.subCategories.jeans.id
		);
	});

	await test.step("Verify that user is navigated to that category page", async () => {
		await expect(page.locator("h2.title.text-center")).toContainText(
			PRODUCT_CATEGORIES.men.id
		);
	});
});
