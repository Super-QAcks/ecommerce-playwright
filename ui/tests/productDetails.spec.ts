import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { ProductDetailsPage } from "../pom/pages/productDetailsPage";
import { HeaderComponent } from "../pom/component/header.component";
import { URL_BASE } from "../pom/data/urls";
import { VALID_PRODUCTS } from "../pom/data/products";
import { ValidReview } from "../pom/data/reviews";

test.describe("Product Details Page", () => {
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
