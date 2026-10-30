import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
	readonly loginFormRoot: Locator;
	readonly loginFormTitle: Locator;
	private readonly emailInput: Locator;
	private readonly passwordInput: Locator;
	private readonly loginButton: Locator;
	readonly errorMessage: Locator;

	readonly signUpFormRoot: Locator;
	readonly signUpFormTitle: Locator;
	readonly signUpNameInput: Locator;
	readonly signUpEmailInput: Locator;
	readonly signUpButton: Locator;
	readonly signUpErrorMessage: Locator;

	constructor(page: Page) {
		super(page);
		this.loginFormRoot = page.locator(".login-form");
		this.loginFormTitle = this.loginFormRoot.getByRole("heading", {
			name: "Login to your account",
		});
		this.emailInput = this.loginFormRoot.getByTestId("login-email");
		this.passwordInput = this.loginFormRoot.getByTestId("login-password");
		this.loginButton = this.loginFormRoot.getByTestId("login-button");
		this.errorMessage = this.loginFormRoot.getByText(
			"Your email or password is incorrect!"
		);

		this.signUpFormRoot = page.locator(".signup-form");
		this.signUpFormTitle = this.signUpFormRoot.getByRole("heading", {
			name: "New User Signup!",
		});
		this.signUpNameInput = this.signUpFormRoot.getByTestId("signup-name");
		this.signUpEmailInput = this.signUpFormRoot.getByTestId("signup-email");
		this.signUpButton = this.signUpFormRoot.getByTestId("signup-button");
		this.signUpErrorMessage = this.signUpFormRoot.getByText(
			"Email Address already exist!"
		);
	}

	/** Waits for the login form. */
	async waitForRoot() {
		await this.loginFormRoot.waitFor({ state: "visible" });
	}

	/** Waits for the "New User Signup!" form. */
	async waitForSignUpRoot() {
		await this.signUpFormRoot.waitFor({ state: "visible" });
	}

	/** Fills the login form and clicks "Login". `username` is the account email. */
	async login(username: string, password: string) {
		await this.emailInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}

	/** Fills the first sign-up form (name and email) and clicks "Signup". */
	async signUp(name: string, email: string) {
		await this.signUpNameInput.fill(name);
		await this.signUpEmailInput.fill(email);
		await this.signUpButton.click();
	}

	/** Waits for the "Email Address already exist!" message after a failed sign-up. */
	async waitForSignUpErrorMessage() {
		await this.signUpErrorMessage.waitFor({ state: "visible" });
	}

	/** Returns the sign-up error text. Call `waitForSignUpErrorMessage()` first. */
	async getSignUpErrorMessage() {
		return this.signUpErrorMessage.textContent();
	}

	/** Waits for the "email or password is incorrect" message after a failed login. */
	async waitForErrorMessage() {
		await this.errorMessage.waitFor({ state: "visible" });
	}

	/** Returns the login error text. Call `waitForErrorMessage()` first. */
	async getErrorMessage() {
		return this.errorMessage.textContent();
	}
}
