import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { FooterComponent } from "../pom/component/footeer.component";
import { URL_BASE } from "../pom/data/urls";
import { USER_SIGNUP } from "../pom/data/credentials";

test.describe("Home Page Tests.", async () => {
	let homePage: HomePage;
	let footerComponent: FooterComponent;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		footerComponent = new FooterComponent(page);
	});

	test("Test Case 10: Verify Subscription in home page", async ({ page }) => {
		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Scroll down to footer", async () => {
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
		});

		await test.step("Verify text 'SUBSCRIPTION'", async () => {
			await expect(footerComponent.susbcriptionTitle).toBeVisible();
		});

		await test.step("Enter email address in input and click arrow button", async () => {
			await footerComponent.fillSubscription(USER_SIGNUP.email);
			await footerComponent.clickSubscriptionButton();
		});

		await test.step("Verify success message 'You have been successfully subscribed!' is visible", async () => {
			await expect(footerComponent.successSubscribeMessage).toBeVisible();
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
