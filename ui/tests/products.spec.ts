import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { Products } from "../pom/pages/productsPage";
import { HeaderComponent } from "../pom/component/header.component";
import { URL_BASE } from "../pom/data/urls";
import { ProductDetailsPage } from "../pom/pages/productDetailsPage";

test.describe("Products Page Tests", () => {
	let homePage: HomePage;
	let productsPage: Products;
	let productDetailsPage: ProductDetailsPage;
	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		productsPage = new Products(page);
		productDetailsPage = new ProductDetailsPage(page);
	});

	test.only("Test Case 8: Verify All products and product details page", async ({
		page,
	}) => {
		await test.step("Navigate to url", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Click on Products page button", async () => {
			await homePage.clickProductsButton();
		});

		await test.step("Verify that user navigated to Products page successfully", async () => {
			await productsPage.validateProductsPage();
		});

		await test.step("Verify that products list is visible", async () => {
			await productsPage.validateProductsList();
		});

		await test.step("Click on first product's 'View Product' button", async () => {
			await productsPage.clickViewFirstProductButton();
		});

		await test.step("Verify that user navigated to product details page successfully", async () => {
			await productDetailsPage.waitForRoot();
		});

		await test.step("Verify that product details are visible", async () => {
			await productDetailsPage.validateProductDetails();
		});
	});
});
