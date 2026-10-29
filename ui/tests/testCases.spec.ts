import { URL_BASE } from "../pom/data/urls";
import { test, expect } from "@playwright/test";
import { TestCases } from "../pom/pages/testCasesPage";
import { HeaderComponent } from "../pom/component/header.component";
import { setupAdHandling } from "../pom/utils/ads";

test.describe("Test Cases page", () => {
	let testCases: TestCases;
	let headerComponent: HeaderComponent;

	test.beforeEach(async ({ page }) => {
		testCases = new TestCases(page);
		headerComponent = new HeaderComponent(page);
		await setupAdHandling(page);
		await test.step("Navigate to the Home page", async () => {
			await page.goto(URL_BASE);
		});
	});

	test("TC7 - Verify Test Cases page", async () => {
		await test.step("Click on Test cases page Link", async () => {
			await headerComponent.clickTestCasesLink();
		});

		await test.step("Validate the Test Cases page", async () => {
			await expect(testCases.testCasesHeading).toBeVisible();
		});
	});
});
