import { Locator } from "@playwright/test";

export abstract class BaseComponent {
	constructor(readonly root: Locator) {}

	/**
	 * Snapshot check: returns immediately and does NOT retry.
	 * In tests prefer `await expect(component.root).toBeVisible()`.
	 */
	async isVisible(): Promise<boolean> {
		return this.root.isVisible();
	}

	async waitForVisible(timeout?: number): Promise<void> {
		await this.root.waitFor({ state: "visible", timeout });
	}

	/** Override to define when this component is fully loaded and usable. */
	async waitForReady(): Promise<void> {
		await this.waitForVisible();
	}
}
