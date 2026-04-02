import { Page, Locator } from "@playwright/test";

export class HeaderComponent {
	readonly headerRoot: Locator;
	readonly contactUs: Locator;
	readonly signUpLogin: Locator;

	constructor(page: Page) {
		this.headerRoot = page.locator("#header");
		this.contactUs = page.getByRole("link", { name: "Contact Us" });
		this.signUpLogin = page.getByRole("link", { name: "Signup / Login" });
	}

	async waitForRoot() {
		await this.headerRoot.waitFor({ state: "visible" });
	}

	async clickContactUs() {
		this.waitForRoot();
		await this.contactUs.click();
	}

	async clickSignUpLogin() {
		this.waitForRoot();
		await this.signUpLogin.click();
	}
}
