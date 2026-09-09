import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { CartPage } from "../pom/pages/CartPage";
import { FooterComponent } from "../pom/component/footeer.component";
import { URL_BASE } from "../pom/data/urls";
import { RECOMMENDED_PRODUCTS } from "../pom/data/products";

test.describe("Home Page Tests.", async () => {
	let homePage: HomePage;
	let footerComponent: FooterComponent;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		footerComponent = new FooterComponent(page);
	});

	test("Test Case 22: Add to cart from Recommended items", async ({ page }) => {
		const cartPage = new CartPage(page);
		const recommendedProduct = RECOMMENDED_PRODUCTS.default;

		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Scroll to bottom of page", async () => {
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
		});

		await test.step("Verify 'RECOMMENDED ITEMS' are visible", async () => {
			await expect(homePage.recommendedItemsCarousel).toBeVisible();
		});

		await test.step("Click on 'Add To Cart' on Recommended product", async () => {
			await homePage.clickRecommendedProductButtonAddToCart(
				recommendedProduct.name
			);
		});

		await test.step("Click on 'View Cart' button", async () => {
			await homePage.clickViewCartFromModal();
		});

		await test.step("Verify that product is displayed in cart page", async () => {
			await cartPage.waitForCart();
			const cartItem = await cartPage.getCartItemByName(
				recommendedProduct.name
			);
			await expect(cartItem.rootCard).toBeVisible();
		});
	});

	test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality: ", async ({
		page,
	}) => {
		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Scroll down page to bottom", async () => {
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
		});

		await test.step("Verify 'SUBSCRIPTION' is visible", async () => {
			await expect(footerComponent.titleWidget).toBeVisible();
		});

		await test.step("Click on arrow at bottom right side to move upward", async () => {
			await homePage.clickScrollUp();
		});

		await test.step("Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", async () => {
			await expect(homePage.activeSliderH2).toBeVisible();
		});
	});

	test("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async ({
		page,
	}) => {
		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Scroll down page to bottom", async () => {
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
		});

		await test.step("Verify 'SUBSCRIPTION' is visible", async () => {
			await expect(footerComponent.titleWidget).toBeVisible();
		});

		await test.step("Scroll up page to top", async () => {
			await page.evaluate(() => {
				window.scrollTo(0, 0);
			});
		});

		await test.step("Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", async () => {
			await expect(homePage.activeSliderH2).toBeVisible();
		});
	});
});
