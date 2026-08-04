import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { Products } from "../pom/pages/productsPage";
import { HeaderComponent } from "../pom/component/header.component";
import { URL_BASE } from "../pom/data/urls";
import { ProductDetailsPage } from "../pom/pages/productDetailsPage";
import { PRODUCT_DETAILS } from "../pom/data/products";

test.describe("Products Page Tests", () => {
	let homePage: HomePage;
	let productsPage: Products;
	let productDetailsPage: ProductDetailsPage;
	let headerComponent: HeaderComponent;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		productsPage = new Products(page);
		productDetailsPage = new ProductDetailsPage(page);
		headerComponent = new HeaderComponent(homePage.page);
		await homePage.addBlocker();
		await test.step("Navigate to the Home page", async () => {
			await page.goto(URL_BASE);
		});
	});

	test("Test Case 8: Verify All products and product details page", async () => {
		const product = PRODUCT_DETAILS.default;
		const productCard = await homePage.getProductbyName(product.name);
		await test.step("Click on Products page header link", async () => {
			await headerComponent.clickProductsLink();
			await homePage.closeAdds();
		});

		await test.step("Verify that user navigated to Products page successfully", async () => {
			await productsPage.validateProductsPage();
		});

		await test.step("Verify that products list is visible", async () => {
			await productsPage.validateProductsList();
		});

		await test.step("Click on first product's 'View Product' link", async () => {
			await productCard.viewProduct();
		});

		await test.step("Verify that user navigated to product details page successfully", async () => {
			await productDetailsPage.waitForRoot();
		});

		await test.step("Verify that product details are visible", async () => {
			await expect(productDetailsPage.productInformation).toContainText(
				PRODUCT_DETAILS.default.name
			);
			await expect(productDetailsPage.productInformation).toContainText(
				`Rs. ${PRODUCT_DETAILS.default.price}`
			);
			await expect(productDetailsPage.productInformation).toContainText(
				`Availability: ${PRODUCT_DETAILS.default.availability}`
			);
			await expect(productDetailsPage.productInformation).toContainText(
				`Condition: ${PRODUCT_DETAILS.default.condition}`
			);
			await expect(productDetailsPage.productInformation).toContainText(
				`Brand: ${PRODUCT_DETAILS.default.brand}`
			);
			await expect(productDetailsPage.productInformation).toContainText(
				`Category: ${PRODUCT_DETAILS.default.category}`
			);
		});
	});
});
