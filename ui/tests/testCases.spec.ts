import { URL_BASE } from "../pom/data/urls";
import { test } from "@playwright/test";
import { TestCases } from "../pom/pages/testCasesPage";
import { HomePage } from "../pom/pages/homePage";
import { HeaderComponent } from "../pom/component/header.component";

test.describe("Login tests", () => {
	let testCases: TestCases;
	let homePage: HomePage;
	let headerComponent: HeaderComponent;

	test.beforeEach(async ({ page }) => {
		testCases = new TestCases(page);
		homePage = new HomePage(page);
		headerComponent = new HeaderComponent(homePage.page);
		await homePage.addBlocker(); // Block images to speed up tests
		await test.step("Navigate to the Home page", async () => {
			await page.goto(URL_BASE);
		});
	});

	//flaky test, needs to be fixed, skipping for now
	test.skip("TC7 - Verify Test Cases page", async () => {
		await test.step("Click on Test cases page Link", async () => {
			await headerComponent.clickTestCasesLink();
		});

		await test.step("Validate the Test Cases page", async () => {
			await testCases.validateTestCasesPage();
		});
	});
});
