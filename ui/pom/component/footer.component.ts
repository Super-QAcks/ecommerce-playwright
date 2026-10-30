import { Page, Locator } from "@playwright/test";
import { BaseComponent } from "./base.component";

export class FooterComponent extends BaseComponent {
	readonly titleWidget: Locator;
	readonly subscriptionTitle: Locator;
	readonly subscriptionInput: Locator;
	readonly subscriptionButton: Locator;
	readonly successSubscribeMessage: Locator;

	constructor(page: Page) {
		super(page.locator("#footer"));
		this.titleWidget = this.root.locator(".single-widget");
		this.subscriptionTitle = this.root.getByRole("heading", {
			name: "Subscription",
		});
		this.subscriptionInput = this.root.getByRole("textbox", {
			name: "Your email address",
		});
		this.subscriptionButton = this.root.locator("#subscribe");
		this.successSubscribeMessage = this.root.locator("#success-subscribe");
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
