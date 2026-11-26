import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { ProductCard } from "../component/productCard.component";
import { SidebarComponent } from "../component/sidebar.component";
import { AddedProductModal } from "../component/addedProductModal.component";

export class ProductsPage extends BasePage {
	readonly productsHeading: Locator;
	readonly productsList: Locator;
	readonly searchedProductsHeading: Locator;
	readonly searchInput: Locator;
	readonly searchButton: Locator;
	readonly productCards: Locator;
	readonly sidebar: SidebarComponent;
	readonly addedProductModal: AddedProductModal;

	constructor(page: Page) {
		super(page);
		this.sidebar = new SidebarComponent(page);
		this.productsHeading = page.getByRole("heading", { name: "All Products" });
		this.productsList = page.locator(".features_items");
		this.searchedProductsHeading = page.getByRole("heading", {
			name: "Searched Products",
		});
		this.searchInput = page.getByRole("textbox", { name: "Search Product" });
		this.searchButton = page.locator("#submit_search");
		this.productCards = page.locator(".product-image-wrapper");
		this.addedProductModal = new AddedProductModal(page);
	}

	/** Waits for the "All Products" heading and for the page scripts. */
	async waitForProductsPage() {
		await this.productsHeading.waitFor({ state: "visible" });
		await this.waitForPageScripts();
	}

	/** Waits for the "Searched Products" heading that appears after a search. */
	async waitForSearchedProductsHeading() {
		await this.searchedProductsHeading.waitFor({ state: "visible" });
	}

	async fillSearchProduct(productName: string) {
		await this.searchInput.fill(productName);
	}

	async clickSearchButton() {
		await this.searchButton.click();
	}

	/** Returns one `ProductCard` for every card whose text contains `searchWord`. Wait for the results first. */
	async getSearchResultProductCards(searchWord: string) {
		const matchedCards = this.productCards.filter({ hasText: searchWord });
		const count = await matchedCards.count();
		const resultCards: ProductCard[] = [];

		for (let index = 0; index < count; index++) {
			resultCards.push(new ProductCard(matchedCards.nth(index)));
		}

		return resultCards;
	}

	/** Returns the first product card whose text contains `name`. */
	async getProductbyName(name: string) {
		return new ProductCard(this.productCards.filter({ hasText: name }).first());
	}

	/** Clicks "Add to cart" on the card at `listNumber` (1-based). */
	async clickAddToCartOnProductCardbyListNumber(listNumber: number) {
		const productCard = new ProductCard(this.productCards.nth(listNumber - 1));
		await productCard.addToCart();
	}

	/** Waits for the added-product modal, then clicks "Continue Shopping". */
	async clickContinueShoppingOverModal() {
		await this.addedProductModal.waitForModal();
		await this.addedProductModal.clickContinueShopping();
	}

	/** Waits for the added-product modal, then clicks "View Cart". */
	async clickViewCartOverModal() {
		await this.addedProductModal.waitForModal();
		await this.addedProductModal.clickViewCart();
	}

	/** Returns the name and price of the card at `listNumber` (1-based). */
	async getProductDataFromProductCardbyListNumber(listNumber: number) {
		const productCard = new ProductCard(this.productCards.nth(listNumber - 1));

		return {
			name: await productCard.getProductName(),
			price: await productCard.getProductPrice(),
		};
	}
}
