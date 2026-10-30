import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base.component";

export class AddedProductModal extends BaseComponent {
	readonly viewCartButton: Locator;
	readonly continueShoppingButton: Locator;

	constructor(page: Page) {
		super(page.locator("#cartModal"));
		this.viewCartButton = this.root.getByRole("link", {
			name: "View Cart",
		});
		this.continueShoppingButton = this.root.getByRole("button", {
			name: "Continue Shopping",
		});
	}

	/** Waits until the "product added" modal is visible. Call it before clicking its buttons. */
	async waitForModal() {
		await this.waitForVisible();
	}

	/** Clicks "View Cart" and navigates to the cart page. */
	async clickViewCart() {
		await this.viewCartButton.click();
	}

	/** Clicks "Continue Shopping" and returns to the page behind the modal. */
	async clickContinueShopping() {
		await this.continueShoppingButton.click();
	}
}
