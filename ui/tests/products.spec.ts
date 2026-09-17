import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { ProductsPage } from "../pom/pages/productsPage";
import { HeaderComponent } from "../pom/component/header.component";
import { URL_BASE } from "../pom/data/urls";
import { ProductDetailsPage } from "../pom/pages/productDetailsPage";
import { PRODUCT_DETAILS } from "../pom/data/products";
import { VALID_PRODUCTS } from "../pom/data/products";
import { ValidReview } from "../pom/data/reviews";

test.describe("Products Page Tests", () => {
	let homePage: HomePage;
	let productsPage: ProductsPage;
	let productDetailsPage: ProductDetailsPage;
	let headerComponent: HeaderComponent;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		productsPage = new ProductsPage(page);
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
			await productsPage.validateProductsList();
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

	test("Test Case 21: Add review on product", async ({ page }) => {
		const homePage = new HomePage(page);
		const productDetailsPage = new ProductDetailsPage(page);
		const headerComponent = new HeaderComponent(page);

		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Click on 'Products' button", async () => {
			await headerComponent.clickProductsLink();
		});

		await test.step("Verify user is navigated to ALL PRODUCTS page successfully", async () => {
			await expect(page).toHaveURL(/.*products/);
		});

		await test.step("Click on 'View Product' button", async () => {
			const product = VALID_PRODUCTS.fancyGreenTop;
			const productCard = await homePage.getProductbyName(product.name);
			await productCard.viewProduct();
		});

		await test.step("Verify 'Write Your Review' is visible", async () => {
			await expect(productDetailsPage.reviewTitle).toBeVisible();
		});

		await test.step("Enter name, email and review", async () => {
			await productDetailsPage.fillReviewForm(ValidReview);
		});

		await test.step("Click 'Submit' button", async () => {
			await productDetailsPage.submitReview();
		});

		await test.step("Verify success message 'Thank you for your review.'", async () => {
			await expect(productDetailsPage.reviewSuccessMessage).toBeVisible();
		});
	});
});
