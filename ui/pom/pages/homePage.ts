import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { ProductCard } from "../component/productCard.component";
import { AddedProductModal } from "../component/addedProductModal.component";
import { Product } from "../data/interfaces";
export class HomePage extends BasePage {
	readonly homeSlider: Locator;
	readonly homeFeaturesProducts: Locator;
	readonly activeSlider: Locator;
	readonly activeSliderH2: Locator;
	readonly productCards: Locator;
	readonly addedProductModal: AddedProductModal;
	readonly recommendedItemsCarousel: Locator;

	constructor(page: Page) {
		super(page);
		this.homeSlider = page.locator("section#slider");
		this.activeSlider = page.locator(
			"#slider-carousel > .carousel-inner > .active"
		);
		this.activeSliderH2 = this.activeSlider.getByRole("heading", {
			name: "Full-Fledged practice website for Automation Engineers",
		});
		this.homeFeaturesProducts = page.locator("div.features_items");
		this.recommendedItemsCarousel = page.locator("div.recommended_items");
		this.productCards = page.locator(".product-image-wrapper");
		this.addedProductModal = new AddedProductModal(page);
	}

	async waitForRoot() {
		await this.homeSlider.waitFor({ state: "visible" });
		await this.waitForPageScripts();
	}

	/** Returns the first product card in the main list whose text contains `name`. */
	async getProductbyName(name: string) {
		//Future enhancement: This method can be enhanced to search for products in both the main product list and the recommended items carousel.
		return new ProductCard(this.productCards.filter({ hasText: name }).first());
	}

	/** Returns the first recommended-items card whose text contains `name`. */
	async getProductByNameFromRecommendedItems(name: string) {
		const recommendedItems = this.recommendedItemsCarousel.locator(
			".product-image-wrapper"
		);
		return new ProductCard(recommendedItems.filter({ hasText: name }).first());
	}

	/** Adds each product to the cart through the card overlay, closing the modal with "Continue Shopping" every time. */
	async addProductsToCart(products: Record<string, Product>) {
		for (const product of Object.values(products)) {
			const productCard = await this.getProductbyName(product.name);
			await productCard.addToCartOverlay();
			await this.addedProductModal.waitForModal();
			await this.addedProductModal.clickContinueShopping();
		}
	}

	/** Clicks "Add to cart" on a recommended-items card, found by product name. */
	async clickRecommendedProductButtonAddToCart(productName: string) {
		const productCard =
			await this.getProductByNameFromRecommendedItems(productName);
		await productCard.addToCart();
	}

	/** Waits for the added-product modal, then clicks "View Cart". */
	async clickViewCartFromModal() {
		await this.addedProductModal.waitForModal();
		await this.addedProductModal.clickViewCart();
	}

	/** Waits for the added-product modal, then clicks "Continue Shopping". */
	async clickContinueShoppingFromModal() {
		await this.addedProductModal.waitForModal();
		await this.addedProductModal.clickContinueShopping();
	}
}
