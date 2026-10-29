import { Page, Locator } from "@playwright/test";

export class FooterComponent {
	readonly footerRoot: Locator;
	readonly titleWidget: Locator;
	readonly susbcriptionTitle: Locator;
	readonly subscriptionInput: Locator;
	readonly subscriptionButton: Locator;
	readonly successSubscribeMessage: Locator;

	constructor(page: Page) {
		this.footerRoot = page.locator("#footer");
		this.titleWidget = page.locator(".single-widget");
		this.susbcriptionTitle = page.getByRole("heading", {
			name: "Subscription",
		});
		this.subscriptionInput = page.getByRole("textbox", {
			name: "Your email address",
		});
		this.subscriptionButton = page.locator("#subscribe");
		this.successSubscribeMessage = page.locator("#success-subscribe");
	}

	/** Types the email into the subscription field. Does not submit it. */
	async fillSubscription(email: string) {
		await this.subscriptionInput.fill(email);
	}

	/** Clicks the subscribe button. The result message is `successSubscribeMessage`. */
	async clickSubscriptionButton() {
		await this.subscriptionButton.click();
	}
}
