import { Page, Locator } from "@playwright/test";
import { setupAdHandling } from "../utils/ads";

export class BasePage {
	protected page: Page;
	readonly scrollUpButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.scrollUpButton = page.locator("#scrollUp");
	}

	async goto(url: string) {
		await setupAdHandling(this.page);
		await this.page.goto(url, {
			waitUntil: "domcontentloaded",
			timeout: 60000,
		});
	}

	async clickScrollUp() {
		await this.scrollUpButton.click();
		await this.scrollUpButton.waitFor({ state: "hidden" });
	}

	async waitForScrollButton() {
		await this.scrollUpButton.waitFor({ state: "visible" });
	}
}
