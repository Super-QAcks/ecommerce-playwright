import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { SideBarComponent } from "../component/sideBar.component";

export class BrandProductPage extends PageFactory {
	readonly brandHeading: Locator;
	readonly productsList: Locator;
	readonly productCards: Locator;
	readonly sideBar: SideBarComponent;

	constructor(page: Page) {
		super(page);
		this.sideBar = new SideBarComponent(page);
		this.brandHeading = page.locator("h2.title.text-center");
		this.productsList = page.locator(".features_items");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForBrandProductPage() {
		await this.brandHeading.waitFor({ state: "visible" });
	}
}
