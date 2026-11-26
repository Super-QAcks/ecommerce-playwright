import { Locator, Page } from "@playwright/test";

export class AddedProductModal {
	readonly page: Page;
	readonly modalRoot: Locator;
	readonly viewCartButton: Locator;
	readonly continueShoppingButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.modalRoot = this.page.locator("#cartModal");
		this.viewCartButton = this.modalRoot.getByRole("link", {
			name: "View Cart",
		});
		this.continueShoppingButton = this.modalRoot.getByRole("button", {
			name: "Continue Shopping",
		});
	}

	/** Waits until the "product added" modal is visible. Call it before clicking its buttons. */
	async waitForModal() {
		await this.modalRoot.waitFor({ state: "visible" });
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
