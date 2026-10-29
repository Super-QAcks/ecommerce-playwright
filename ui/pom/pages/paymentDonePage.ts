import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class PaymentDonePage extends BasePage {
	readonly paymentDoneRoot: Locator;
	readonly orderPlacedMessage: Locator;
	readonly successMessage: Locator;
	readonly downloadInvoiceButton: Locator;
	readonly continueButton: Locator;

	constructor(page: Page) {
		super(page);
		this.paymentDoneRoot = page.locator("#form");
		this.orderPlacedMessage = page.getByRole("heading", {
			name: "Order Placed!",
		});
		this.successMessage = page
			.locator(".container")
			.filter({ hasText: "Congratulations! Your order has been confirmed!" });
		this.downloadInvoiceButton = page.getByRole("link", {
			name: "Download Invoice",
		});
		this.continueButton = page.getByTestId("continue-button");
	}

	/** Waits for the order-confirmation block. */
	async waitForRoot() {
		await this.paymentDoneRoot.waitFor({ state: "visible" });
	}

	/** Clicks "Continue" after the order is confirmed. */
	async clickContinue() {
		await this.continueButton.click();
	}

	/** Clicks "Download Invoice". */
	async clickDownloadInvoice() {
		await this.downloadInvoiceButton.click();
	}
}
