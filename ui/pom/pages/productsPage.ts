import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { ProductCard } from "../component/productCard.component";

export class Products extends PageFactory {
	readonly productsHeading: Locator;
	readonly productCards: Locator;

	constructor(page: Page) {
		super(page);
		this.productsHeading = page.getByRole("heading", { name: "All Products" });
		this.productCards = page.locator(".product-image-wrapper");
	}

	async validateProductsPage() {
		await this.productsHeading.isVisible();
	}

	async getProductbyName(name: string) {
		return new ProductCard(this.productCards.filter({ hasText: name }).first());
	}
}
