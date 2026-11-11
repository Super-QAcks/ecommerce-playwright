import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { SidebarComponent } from "../component/sidebar.component";

export class CategoryProductPage extends PageFactory {
	readonly categoryHeading: Locator;
	readonly productsList: Locator;
	readonly productCards: Locator;
	readonly sidebar: SidebarComponent;

	constructor(page: Page) {
		super(page);
		this.sidebar = new SidebarComponent(page);
		this.categoryHeading = page.locator("h2.title.text-center");
		this.productsList = page.locator(".features_items");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForCategoryProductPage() {
		await this.categoryHeading.waitFor({ state: "visible" });
	}
}
