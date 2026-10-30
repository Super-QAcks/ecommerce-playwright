import { Locator } from "@playwright/test";
import { parsePrice } from "../utils/price";
import { BaseComponent } from "./base.component";

export class ProductCard extends BaseComponent {
	readonly productName: Locator;
	readonly productPrice: Locator;
	readonly addToCartButton: Locator;
	readonly addToCartOverlayButton: Locator;
	readonly viewProductButton: Locator;

	constructor(root: Locator) {
		super(root);
		this.productName = root.locator(".single-products>div>p");
		this.productPrice = root.locator(".single-products>div>h2");
		this.addToCartButton = root.locator(".productinfo .add-to-cart");
		this.viewProductButton = root.getByRole("link", {
			name: /View Product/i,
		});
		this.addToCartOverlayButton = root.locator(".overlay-content .add-to-cart");
	}

	/** Clicks the "Add to cart" button that is visible without hovering. */
	async addToCart() {
		await this.addToCartButton.first().click();
	}

	/** Hovers the card to reveal the overlay, then clicks its "Add to cart" button. */
	async addToCartOverlay() {
		await this.hoverOverCard();
		await this.addToCartOverlayButton.click();
	}

	async hoverOverCard() {
		await this.root.hover();
	}

	async viewProduct() {
		await this.viewProductButton.click();
	}

	/** Returns the card at position `listNumber` (1-based) of the list this card's root points to. */
	async getProductByListNumber(listNumber: number) {
		const productCard = new ProductCard(this.root.nth(listNumber - 1));
		return productCard;
	}

	/** Returns the card's product name, trimmed. */
	async getProductName() {
		return (await this.productName.innerText()).trim();
	}

	/** Returns the card's price parsed with `parsePrice`. */
	async getProductPrice() {
		return parsePrice((await this.productPrice.innerText()).trim());
	}
}
