import { Locator } from "@playwright/test";
import { parsePrice } from "../utils/price";
import { BaseComponent } from "./base.component";

export class CartItemCard extends BaseComponent {
	readonly productName: Locator;
	readonly productPrice: Locator;
	readonly productQuantity: Locator;
	readonly productTotalPrice: Locator;
	readonly deleteButton: Locator;

	constructor(root: Locator) {
		super(root);
		this.productName = root.locator(".cart_description h4 a");
		this.productPrice = root.locator(".cart_price p");
		this.productQuantity = root.locator(".cart_quantity");
		this.productTotalPrice = root.locator(".cart_total_price");
		this.deleteButton = root.locator(".cart_quantity_delete");
	}

	/** Clicks the delete button and waits until this row disappears from the cart. */
	async deleteItem() {
		await this.deleteButton.click();
		await this.root.waitFor({ state: "hidden" });
	}

	/** Returns the product name, trimmed. */
	async getProductName() {
		return (await this.productName.innerText()).trim();
	}

	/** Returns the unit price parsed with `parsePrice`. */
	async getProductPrice() {
		return parsePrice((await this.productPrice.innerText()).trim());
	}

	/** Returns the row's quantity as a number. */
	async getProductQuantity() {
		const text = await this.productQuantity.innerText();
		return Number(text.trim());
	}

	/** Returns the row's total price (price × quantity) parsed with `parsePrice`. */
	async getTotalPrice() {
		return parsePrice(await this.productTotalPrice.innerText());
	}
}
