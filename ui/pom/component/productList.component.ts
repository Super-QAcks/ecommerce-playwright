import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base.component";
import { ProductCard } from "../component/productCard.component";

export class ProductListComponent extends BaseComponent {
	readonly featuresItemsHeading: Locator;
	readonly productCards: Locator;

	constructor(page: Page) {
		super(page.locator(".features_items"));
		this.featuresItemsHeading = page.locator(".title.text-center");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForFeaturesItemsComponent() {
		await this.featuresItemsHeading.waitFor({ state: "visible" });
	}

	// ---- Locators ----

	private getProductbyName(name: string) {
		return new ProductCard(this.productCards.filter({ hasText: name }).first());
	}

	async getSListOfProductCards(searchWord: string) {
		const matchedCards = this.productCards.filter({ hasText: searchWord });
		const count = await matchedCards.count();
		const resultCards: ProductCard[] = [];

		for (let index = 0; index < count; index++) {
			resultCards.push(new ProductCard(matchedCards.nth(index)));
		}

		return resultCards;
	}
}
