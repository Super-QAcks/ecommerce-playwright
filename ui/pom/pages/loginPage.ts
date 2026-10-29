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

	async waitForRoot() {
		await this.loginFormRoot.waitFor({ state: "visible" });
	}

	async waitForSignUpRoot() {
		await this.signUpFormRoot.waitFor({ state: "visible" });
	}

	async login(username: string, password: string) {
		await this.emailInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}

	async signUp(name: string, email: string) {
		await this.signUpNameInput.fill(name);
		await this.signUpEmailInput.fill(email);
		await this.signUpButton.click();
	}

	async waitForSignUpErrorMessage() {
		await this.signUpErrorMessage.waitFor({ state: "visible" });
	}

	async getSignUpErrorMessage() {
		return this.signUpErrorMessage.textContent();
	}

	async waitForErrorMessage() {
		await this.errorMessage.waitFor({ state: "visible" });
	}

	async getErrorMessage() {
		return this.errorMessage.textContent();
	}
}
