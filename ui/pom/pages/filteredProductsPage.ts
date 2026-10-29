import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { SidebarComponent } from "../component/sidebar.component";

/** Products listed under a title, as in a brand page or a category page. */
export class FilteredProductsPage extends BasePage {
	readonly heading: Locator;
	readonly productCards: Locator;
	readonly sidebar: SidebarComponent;

	constructor(page: Page) {
		super(page);
		this.sidebar = new SidebarComponent(page);
		this.heading = page.locator("h2.title.text-center");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForHeading() {
		await this.heading.waitFor({ state: "visible" });
	}
}
