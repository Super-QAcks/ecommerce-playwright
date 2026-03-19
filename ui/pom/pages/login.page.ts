import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { LOGIN_URL } from "../data/urls";

export class LoginPage extends BasePage {
	readonly rootAccount: Locator;
	readonly emailInput: Locator;
	readonly passwordInput: Locator;
	readonly loginButton: Locator;
	// readonly errorMessage: Locator;

	constructor(page: Page) {
		super(page);
		this.rootAccount = page.locator("#account");
		this.emailInput = page.getByRole("textbox", { name: "Email Address" });
		this.passwordInput = page.getByRole("textbox", { name: "Password" });
		this.loginButton = page.getByRole("button", { name: "Sign In" });
		// this.errorMessage = page.locator('.errors > ul:nth-child(1) > li:nth-child(1)');
	}

	async login(email: string, password: string) {
		await this.goTo(LOGIN_URL);
		await this.emailInput.fill(email);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}

	async awaitForVisibleRoot() {
		await this.rootAccount.waitFor({ state: "visible" });
	}
}
