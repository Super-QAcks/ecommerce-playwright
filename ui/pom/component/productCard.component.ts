import { Locator } from "@playwright/test";
import { parsePrice } from "../utils/price";

export class ProductCard {
	readonly rootCard: Locator;
	readonly productName: Locator;
	readonly productPrice: Locator;
	readonly addToCartButton: Locator;
	readonly addToCartOverlayButton: Locator;
	readonly viewProductButton: Locator;

	constructor(root: Locator) {
		this.rootCard = root;
		this.productName = root.locator(".single-products>div>p");
		this.productPrice = root.locator(".single-products>div>h2");
		this.addToCartButton = root.locator(".productinfo .add-to-cart");
		this.viewProductButton = root.getByRole("link", {
			name: /View Product/i,
		});
		this.addToCartOverlayButton = root.locator(".overlay-content .add-to-cart");
	}

	async addToCart() {
		await this.addToCartButton.first().click();
	}

	async addToCartOverlay() {
		await this.hoverOverCard();
		await this.addToCartOverlayButton.click();
	}

	async hoverOverCard() {
		await this.rootCard.hover();
	}

	async viewProduct() {
		await this.viewProductButton.click();
	}

	async getProductByListNumber(listNumber: number) {
		const productCard = new ProductCard(this.rootCard.nth(listNumber - 1));
		return productCard;
	}

	async getProductName() {
		return (await this.productName.innerText()).trim();
	}

	async getProductPrice() {
		return parsePrice((await this.productPrice.innerText()).trim());
	}
}
