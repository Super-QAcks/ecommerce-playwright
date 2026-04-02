import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";

export class Products extends PageFactory {
	readonly productsHeading: Locator;
	readonly firstProductViewDetailsLink: Locator;
	readonly productList: Locator;

	constructor(page: Page) {
		super(page);
		this.productsHeading = page.getByRole("heading", { name: "All Products" });
		this.firstProductViewDetailsLink = page
			.getByRole("link", { name: /View Product/i })
			.first();
		this.productList = page.locator(".features_items");
	}

	async validateProductsPage() {
		await this.productsHeading.isVisible();
	}

	async clickFirstProductViewDetails() {
		await this.firstProductViewDetailsLink.scrollIntoViewIfNeeded();
		await this.productList.waitFor({ state: "visible" });
		await this.firstProductViewDetailsLink.click({ force: true });
	}
}
