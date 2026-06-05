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

	async fillSubscription(email: string) {
		await this.subscriptionInput.fill(email);
	}

	async clickSubscriptionButton() {
		await this.subscriptionButton.click();
	}
}
