import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class CheckoutPage extends BasePage {
	readonly checkoutRoot: Locator;
	readonly deliveryAddressForm: Locator;
	readonly billingAddressForm: Locator;
	readonly reviewOrderSection: Locator;
	readonly commentOrderTextArea: Locator;
	readonly placeOrderButton: Locator;

	constructor(page: Page) {
		super(page);
		this.checkoutRoot = page.locator("#cart_items > .container");
		this.deliveryAddressForm = page.locator("#address_delivery");
		this.billingAddressForm = page.locator("#address_invoice");
		this.reviewOrderSection = page.locator("#cart_info");
		this.commentOrderTextArea = page.locator('textarea[name="message"]');
		this.placeOrderButton = page.getByRole("link", { name: "Place Order" });
	}

	/** Waits for the checkout block (addresses and order review). */
	async waitForRoot() {
		await this.checkoutRoot.waitFor({ state: "visible" });
	}

	/** Types `comment` in the order comment box. */
	async commentOrder(comment: string) {
		await this.commentOrderTextArea.fill(comment);
	}

	/** Clicks "Place Order" and goes to the payment page. */
	async placeOrder() {
		await this.placeOrderButton.click();
	}
}
