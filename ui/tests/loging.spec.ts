import { test, expect } from "@playwright/test";
import { test as LoginFixture } from "./helpers/loginFixture";
import { LoginPage } from "../pom/pages/loginPage";
import { HomePage } from "../pom/pages/homePage";
import { HeaderComponent } from "../pom/component/header.component";
import { URL_BASE } from "../pom/data/urls";
import { LOGIN_CREDENTIALS } from "../pom/data/credentials";

LoginFixture.describe("Login Page Tests", () => {
	LoginFixture("should log out successfully", async ({ loginPage }) => {
		LoginFixture.step("Click on Logout link", async () => {
			await loginPage.logout();
		});

		LoginFixture.step("Validate successful logout", async () => {
			await loginPage.waitForRoot();
		});
	});
});

test("Test Case 2: Login User with correct email and password", async ({
	page,
}) => {
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

	await test.step("Verify 'Login to your account' is visible", async () => {
		await expect(loginPage.loginFormTitle).toBeVisible();
	});

	await test.step("Enter correct email address and password and Click 'login' button", async () => {
		await loginPage.login(
			LOGIN_CREDENTIALS.STANDARD_USER,
			LOGIN_CREDENTIALS.PASSWORD
		);
	});

	await test.step("Verify that 'Logged in as username' is visible", async () => {
		await expect(headercomponent.loggedUserName).toContainText(
			LOGIN_CREDENTIALS.NAME_USER
		);
	});
});

test("Test Case 3: Login User with incorrect email and password: ", async ({
	page,
}) => {
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

	await test.step("Verify 'Login to your account' is visible", async () => {
		await expect(loginPage.loginFormTitle).toBeVisible();
	});

	await test.step("Enter incorrect email address and password and click 'login' button", async () => {
		await loginPage.login(
			LOGIN_CREDENTIALS.INVALID_USER,
			LOGIN_CREDENTIALS.INVALID_PASSWORD
		);
	});

	await test.step("Verify error 'Your email or password is incorrect!' is visible", async () => {
		expect(await loginPage.getErrorMessage()).toContain(
			"Your email or password is incorrect!"
		);
	});
});
