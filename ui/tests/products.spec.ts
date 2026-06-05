import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { Products } from "../pom/pages/productsPage";
import { URL_BASE } from "../pom/data/urls";
import { ProductDetailsPage } from "../pom/pages/productDetailsPage";
import { HeaderComponent } from "../pom/component/header.component";

test.describe("Products Page Tests", () => {
	let homePage: HomePage;
	let productsPage: Products;
	let productDetailsPage: ProductDetailsPage;
	let headerComponent: HeaderComponent;
	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		productsPage = new Products(page);
	});

	test("Test Case 8: Verify All products and product details page", async ({
		page,
	}) => {
		productDetailsPage = new ProductDetailsPage(page);
		headerComponent = new HeaderComponent(page);

		await test.step("Navigate to url", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Click on Products page button", async () => {
			await headerComponent.clickProductsLink();
		});

		await test.step("Verify that user navigated to Products page successfully", async () => {
			await productsPage.validateProductsPage();
		});

		await test.step("Verify that products list is visible", async () => {
			await expect(productsPage.productsList).toBeVisible();
		});

		await test.step("Click on first product's 'View Product' button", async () => {
			await productsPage.clickViewFirstProductButton();
		});

		await test.step("Verify that user navigated to product details page successfully", async () => {
			await productDetailsPage.waitForRoot();
		});

		await test.step("Verify that product details are visible", async () => {
			await expect(productDetailsPage.productName).not.toBeEmpty();
			await expect(productDetailsPage.productCategory).toBeVisible();
			await expect(productDetailsPage.productPrice).toBeVisible();
			await expect(productDetailsPage.productAvailability).toBeVisible();
			await expect(productDetailsPage.productCondition).toBeVisible();
			await expect(productDetailsPage.productBrand).toBeVisible();
		});
	});
});
