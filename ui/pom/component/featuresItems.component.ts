import { Locator, Page } from "@playwright/test";
import { ComponentFactory } from "./componentFactory";
import { ProductCard } from "../component/productCard.component";

export class FeaturesItemsComponent extends ComponentFactory {
	readonly root: Locator;
	readonly featuresItemsHeading: Locator;
	readonly productCards: Locator;

	constructor(page: Page, root: Locator) {
		super(root.page(), page.locator(".features_items"));
		this.root = root;
		this.featuresItemsHeading = root.locator(".title.text-center");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForFeaturesItemsComponent() {
		await this.featuresItemsHeading.waitFor({ state: "visible" });
	}

	async getSearchResultProductCards(searchWord: string) {
		const matchedCards = this.productCards.filter({ hasText: searchWord });
		const count = await matchedCards.count();
		const resultCards: ProductCard[] = [];

		for (let index = 0; index < count; index++) {
			resultCards.push(new ProductCard(matchedCards.nth(index)));
		}

		return resultCards;
	}

	async getProductbyName(name: string) {
		return new ProductCard(this.productCards.filter({ hasText: name }).first());
	}
}
