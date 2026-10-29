import { Page, Locator } from "@playwright/test";
import { URL_PRODUCTS } from "../data/urls";
import { BaseComponent } from "./baseComponent";

export class HeaderComponent extends BaseComponent {
	readonly contactUs: Locator;
	readonly cart: Locator;
	readonly signUpLogin: Locator;
	readonly productsLink: Locator;
	readonly testCasesLink: Locator;
	readonly logout: Locator;
	readonly deleteAccount: Locator;
	readonly loggedUserName: Locator;
	private readonly page: Page;

	constructor(page: Page) {
		super(page.locator("#header"));
		this.page = page;
		this.contactUs = this.root.getByRole("link", { name: "Contact Us" });
		this.logout = this.root.getByRole("link", { name: "Logout" });
		this.deleteAccount = this.root.getByRole("link", {
	name: "Delete Account",
});
this.cart = this.root.getByRole("link", { name: "Cart" });
		this.signUpLogin = this.root.getByRole("link", {
	name: "Signup / Login",
});
		this.productsLink = this.root.getByRole("link", {
	name: /Products/i,
});
		this.testCasesLink = this.root.getByRole("link", {
	name: "Test Cases",
});
		this.loggedUserName = this.root.getByText("Logged in as").locator("b");
	}

	async clickContactUs() {
		await this.waitForReady();
		await this.contactUs.click();
	}

	async clickSignUpLogin() {
		await this.waitForReady();
		await this.signUpLogin.click();
	}

	async clickProductsLink() {
		await this.waitForReady();
		await this.productsLink.click();
		if (this.page.url().includes("#google_vignette")) {
			await this.page.goto(URL_PRODUCTS);
		}
	}

	async clickTestCasesLink() {
		await this.waitForReady();
		await this.testCasesLink.click();
	}

	async clickCart() {
		await this.waitForReady();
		await this.cart.click();
	}

	async clickLogout() {
		await this.waitForReady();
		await this.logout.click();
	}

	async clickDeleteAccount() {
		await this.waitForReady();
		await this.deleteAccount.click();
	}
}
