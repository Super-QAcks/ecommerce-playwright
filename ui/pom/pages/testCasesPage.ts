import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class TestCases extends BasePage {
	private readonly testCasesHeading: Locator;

	constructor(page: Page) {
		super(page);
		this.testCasesHeading = page.getByRole("heading", { name: "Test Cases" });
	}

	async validateTestCasesPage() {
		await this.testCasesHeading.isVisible();
	}
}
