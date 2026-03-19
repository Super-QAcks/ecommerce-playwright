import { type Page } from "@playwright/test";

export abstract class BasePage {
	protected readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goTo(url: string) {
		await this.page.goto(url);
	}
}
