import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { HeaderComponent } from "../pom/component/header.component";
import { LoginPage } from "../pom/pages/loginPage";
import { URL_BASE } from "../pom/data/urls";
import { LOGIN_CREDENTIALS } from "../pom/data/credentials";

test("Test Case 5: Register User with existing email: ", async ({ page }) => {
	const homePage = new HomePage(page);
	const headercomponent = new HeaderComponent(page);
	const loginPage = new LoginPage(page);
	await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
		await homePage.goto(URL_BASE);
	});

	await test.step("Verify that home page is visible successfully", async () => {
		await homePage.waitForRoot();
	});

	await test.step("Click on 'Signup / Login' button", async () => {
		await headercomponent.clickSignUpLogin();
	});

	await test.step("Verify 'New User Signup!' is visible", async () => {
		await expect(loginPage.signUpFormTitle).toBeVisible();
	});

	await test.step("Enter name and already registered email address and SignUpButton", async () => {
		await loginPage.signUp(
			LOGIN_CREDENTIALS.NAME_USER,
			LOGIN_CREDENTIALS.STANDARD_USER
		);
	});

	await test.step("Verify error 'Email Address already exist!' is visible", async () => {
		await loginPage.waitForSingUpErrorMessage();
		expect(await loginPage.getSignUpErrorMessage()).toContain(
			"Email Address already exist!"
		);
	});
});
