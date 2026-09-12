import { Locator } from "@playwright/test";
import { parsePrice } from "../utils/price";
export class CartItemCard {
	readonly rootCard: Locator;
	readonly productName: Locator;
	readonly productPrice: Locator;
	readonly productQuantity: Locator;
	readonly productTotalPrice: Locator;
	readonly deleteButton: Locator;

	constructor(root: Locator) {
		this.rootCard = root;
		this.productName = root.locator(".cart_description h4 a");
		this.productPrice = root.locator(".cart_price p");
		this.productQuantity = root.locator(".cart_quantity");
		this.productTotalPrice = root.locator(".cart_total_price");
		this.deleteButton = root.locator(".cart_quantity_delete");
	}

	async deleteItem() {
		await this.deleteButton.click();
		await this.rootCard.waitFor({ state: "hidden" });
	}

	async getProductName() {
		return (await this.productName.innerText()).trim();
	}

	async getProductPrice() {
		return parsePrice((await this.productPrice.innerText()).trim());
	}

	async getProductQuantity() {
		const text = await this.productQuantity.innerText();
		return Number(text.trim());
	}

	async getTotalPrice() {
		return parsePrice(await this.productTotalPrice.innerText());
	}
}
