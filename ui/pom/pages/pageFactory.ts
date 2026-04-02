import { Page } from "@playwright/test";

export class PageFactory {
	protected page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto(url: string) {
		await this.page.goto(url, { waitUntil: "commit", timeout: 60000 });
	}

	async addBlocker() {
		await this.page.route("**/*.{png,jpg,jpeg}", (route) => {
			if (
				route.request().url().includes("googleads") ||
				route.request().url().includes("doubleclick")
			) {
				return route.abort();
			}
			return route.continue();
		});
	}

	async closeAdds() {
		const adContainer = this.page.frameLocator("iframe#aswift_2");
		const adContent = adContainer.frameLocator("iframe#ad_iframe");
		const closeButton = adContent.getByRole("button", {
			name: /close|cerrar/i,
		});

		if (await closeButton.isVisible()) {
			await closeButton.click();
		}
	}
}
