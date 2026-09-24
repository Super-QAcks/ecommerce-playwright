import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { SideBarComponent } from "../component/sideBar.component";

export class CategoryProductPage extends PageFactory {
	readonly categoryHeading: Locator;

	readonly productsList: Locator;

	readonly productCards: Locator;
	readonly sideBar: SideBarComponent;

	constructor(page: Page) {
		super(page);
		this.sideBar = new SideBarComponent(page);
		this.categoryHeading = page.getByRole("heading", { name: /.* PRODUCTS/ });
		this.productsList = page.locator(".features_items");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForCategoryProductPage() {
		await this.categoryHeading.waitFor({ state: "visible" });
	}
}
