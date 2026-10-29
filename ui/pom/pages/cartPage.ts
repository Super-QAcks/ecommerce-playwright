import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { CartItemCard } from "../component/cartItemCard.component";

export class CartPage extends BasePage {
	readonly cartRoot: Locator;
	readonly checkoutButton: Locator;
	readonly cartRowsCountLocator: Locator;
	readonly modalCheckoutRoot: Locator;
	readonly modalRegisterLoginLink: Locator;
	readonly modalContinueOnCartButton: Locator;

	constructor(page: Page) {
		super(page);
		this.cartRoot = page.locator("#cart_info");
		this.checkoutButton = page.getByText("Proceed To Checkout");
		this.cartRowsCountLocator = page.locator("#cart_info tbody tr");
		this.modalCheckoutRoot = page.locator(".modal-content");
		this.modalRegisterLoginLink = page.getByRole("link", {
			name: "Register / Login",
		});
		this.modalContinueOnCartButton = page.getByRole("button", {
			name: "Continue On Cart",
		});
	}

	/** Waits for the cart table and for the page scripts. */
	async waitForCart() {
		await this.cartRoot.waitFor({ state: "visible" });
		await this.waitForPageScripts();
	}

	/** Returns the cart row whose text contains `name`. */
	async getCartItemByName(name: string) {
		return new CartItemCard(
			this.cartRoot.locator("tr").filter({ hasText: name })
		);
	}

	/** Waits for the page scripts, then clicks "Proceed To Checkout". */
	async clickCheckout() {
		await this.waitForPageScripts();
		await this.checkoutButton.click();
	}

	/** Waits for the checkout modal shown to guests. */
	async waitForModalCheckout() {
		await this.modalCheckoutRoot.waitFor({ state: "visible" });
	}

	/** Clicks "Register / Login" in the checkout modal shown to guests. */
	async clickModalRegisterLogin() {
		await this.modalRegisterLoginLink.click();
	}

	async getRowCount() {
		return await this.cartRowsCountLocator.count();
	}
}
