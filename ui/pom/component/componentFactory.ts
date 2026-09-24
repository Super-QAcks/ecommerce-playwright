import { Locator, Page } from "@playwright/test";

export class ComponentFactory {
	protected page: Page;
	protected root: Locator;

	constructor(page: Page, root: Locator) {
		this.page = page;
		this.root = root;
	}

	async isVisible() {
		return this.root.isVisible();
	}
}
