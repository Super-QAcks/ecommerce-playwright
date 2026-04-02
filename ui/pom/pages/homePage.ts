import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { ProductCard } from "../component/productCard.component";
import { URL_PRODUCTS } from "../data/urls";

export class HomePage extends PageFactory {
	readonly page: Page;
	readonly homeSlider: Locator;
	readonly homeFeaturesProducts: Locator;
	readonly productCards: Locator;
	readonly productsLink: Locator;
	readonly testCasesLink: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.homeSlider = page.locator("section#slider");
		this.homeFeaturesProducts = page.locator(".features_items");
		this.productCards = page.locator(".product-image-wrapper");
		this.productsLink = page.getByRole("link", { name: /Products/i });
		this.testCasesLink = page.getByRole("link", { name: " Test Cases" });
	}

	async waitForRoot() {
		await this.homeSlider.isVisible();
	}

	async getProductbyName(name: string) {
		return new ProductCard(this.productCards.filter({ hasText: name }));
	}

	async clickProductsLink() {
		await this.productsLink.waitFor({ state: "visible", timeout: 10000 });
		await this.productsLink.click({ force: true });
		if (this.page.url().includes("#google_vignette")) {
			await this.page.goto(URL_PRODUCTS);
		}
	}

	//Move to HomePage when SQA13-VerifyProductQuiantityInCart branch is merged
	async clickTestCasesLink() {
		await this.testCasesLink.click({ force: true });
	}
}
