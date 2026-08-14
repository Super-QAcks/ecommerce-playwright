import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";

export class Products extends PageFactory {
	readonly productsHeading: Locator;
	readonly productsList: Locator;

	constructor(page: Page) {
		super(page);
		this.productsHeading = page.getByRole("heading", { name: "All Products" });
		this.productsList = page.locator(".features_items");
	}

	async validateProductsPage() {
		await this.productsHeading.isVisible();
	}

	async validateProductsList() {
		await this.productsList.isVisible();
	}
}
