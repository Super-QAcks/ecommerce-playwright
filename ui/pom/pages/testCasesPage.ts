import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class TestCasesPage extends BasePage {
	readonly testCasesHeading: Locator;

	constructor(page: Page) {
		super(page);
		this.testCasesHeading = page.getByRole("heading", {
			name: "Test Cases",
			exact: true,
		});
	}
}
