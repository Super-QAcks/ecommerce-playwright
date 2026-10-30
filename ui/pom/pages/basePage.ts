import { Page, Locator } from "@playwright/test";
import { setupAdHandling } from "../utils/ads";

export class BasePage {
	protected page: Page;
	readonly scrollUpButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.scrollUpButton = page.locator("#scrollUp");
	}

	/**
	 * Registers the ad handler, then navigates to `url`, resolving at
	 * `domcontentloaded`. Pages that need their scripts before interaction must
	 * also call `waitForPageScripts()`.
	 */
	async goto(url: string) {
		await setupAdHandling(this.page);
		await this.page.goto(url, {
			waitUntil: "domcontentloaded",
			timeout: 60000,
		});
	}

	/**
	 * Waits until the page has fully loaded, so its scripts have attached their
	 * handlers. Call it before clicking anything driven by JavaScript (modals,
	 * AJAX forms, accordions, delete buttons). Returns immediately if already loaded.
	 */
	async waitForPageScripts() {
		await this.page.waitForLoadState("load");
	}

	/** Clicks the "scroll up" button and waits until it disappears. */
	async clickScrollUp() {
		await this.scrollUpButton.click();
		await this.scrollUpButton.waitFor({ state: "hidden" });
	}

	/** Waits until the "scroll up" button is visible (it appears after scrolling down). */
	async waitForScrollButton() {
		await this.scrollUpButton.waitFor({ state: "visible" });
	}
}
