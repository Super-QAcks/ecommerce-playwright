import { Page, Locator } from "@playwright/test";
import { URL_PRODUCTS } from "../data/urls";

export class HeaderComponent {
	readonly headerRoot: Locator;
	readonly contactUs: Locator;
	readonly cart: Locator;
	readonly signUpLogin: Locator;
	readonly productsLink: Locator;
	readonly testCasesLink: Locator;
	readonly page: Page;
	readonly logout: Locator;
	readonly deleteAccount: Locator;
	readonly loggedUserName: Locator;

	constructor(page: Page) {
		this.page = page;
		this.headerRoot = page.locator("#header");
		this.contactUs = this.headerRoot.getByRole("link", { name: "Contact Us" });
		this.logout = this.headerRoot.getByRole("link", { name: "Logout" });
		this.deleteAccount = this.headerRoot.getByRole("link", {
			name: "Delete Account",
		});
		this.cart = this.headerRoot.getByRole("link", { name: "Cart" });
		this.signUpLogin = this.headerRoot.getByRole("link", {
			name: "Signup / Login",
		});
		this.productsLink = this.headerRoot.getByRole("link", {
			name: /Products/i,
		});
		this.testCasesLink = this.headerRoot.getByRole("link", {
			name: "Test Cases",
		});
		this.loggedUserName = this.headerRoot
			.getByText("Logged in as")
			.locator("b");
	}

	async waitForRoot() {
		await this.headerRoot.waitFor({ state: "visible" });
	}

	async clickContactUs() {
		await this.waitForRoot();
		await this.contactUs.click();
	}

	async clickSignUpLogin() {
		await this.waitForRoot();
		await this.signUpLogin.click();
	}

	async clickProductsLink() {
		await this.productsLink.waitFor({ state: "visible", timeout: 10000 });
		await this.productsLink.click({ force: true });
		if (this.page.url().includes("#google_vignette")) {
			await this.page.goto(URL_PRODUCTS);
		}
	}

	async clickTestCasesLink() {
		await this.testCasesLink.click({ force: true });
	}

	async clickCart() {
		await this.waitForRoot();
		await this.cart.click();
	}

	async clickLogout() {
		await this.waitForRoot();
		await this.logout.click();
	}

	async clickDeleteAccount() {
		await this.waitForRoot();
		await this.deleteAccount.click();
	}
}
