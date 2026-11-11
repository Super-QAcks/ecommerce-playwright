import { Page } from "@playwright/test";

const configuredPages = new WeakSet<Page>();

export async function setupAdHandling(page: Page) {
	if (configuredPages.has(page)) {
		return;
	}
	configuredPages.add(page);

	// Prevent most ads from loading at all
	await page.route(
		/googlesyndication|doubleclick|googleadservices|googleads/,
		(route) => route.abort()
	);

	// Fallback: close an ad if one still gets through
	const closeButton = page
		.frameLocator("iframe[id^='aswift_']")
		.frameLocator("iframe#ad_iframe")
		.getByRole("button", { name: /close|cerrar/i });

	await page.addLocatorHandler(closeButton, async () => {
		await closeButton.click();
	});
}
