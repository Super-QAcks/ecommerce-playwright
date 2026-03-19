import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/pages/login.page";
import { USER_CREDENTIALS } from "../pom/data/constants";

test.describe("Login tests", () => {
	let loginPage: LoginPage;

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page);
	});

	test("should show error message with empty fields", async ({ page }) => {
		await loginPage.login(
			USER_CREDENTIALS.EMPTY_USER,
			USER_CREDENTIALS.EMPTY_PASSWORD
		);
		await loginPage.awaitForVisibleRoot();
		await expect(
			page.getByRole("heading", { name: "Account Details and Order History" })
		).toBeVisible();
	});
});
