import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { ProductCard } from "../component/productCard.component";

export class ProductsPage extends PageFactory {
	readonly productsHeading: Locator;
	readonly searchedProductsHeading: Locator;
	readonly searchInput: Locator;
	readonly searchButton: Locator;
	readonly productCards: Locator;

	constructor(page: Page) {
		super(page);
		this.productsHeading = page.getByRole("heading", { name: "All Products" });
		this.searchedProductsHeading = page.getByRole("heading", {
			name: "Searched Products",
		});
		this.searchInput = page.getByRole("textbox", { name: "Search Product" });
		this.searchButton = page.locator("#submit_search");
		this.productCards = page.locator(".product-image-wrapper");
	}

	async waitForProductsPage() {
		await this.productsHeading.waitFor({ state: "visible" });
	}

	async waitForSearchedProductsHeading() {
		await this.searchedProductsHeading.waitFor({ state: "visible" });
	}

	async fillSearchProduct(productName: string) {
		await this.searchInput.fill(productName);
	}

	async clickSearchButton() {
		await this.searchButton.click();
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
}
