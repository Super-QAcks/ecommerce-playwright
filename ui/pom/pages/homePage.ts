import { Page, Locator } from "@playwright/test";
import { PageFactory } from "./pageFactory";
import { ProductCard } from "../component/productCard.component";
import { AddedProductModal } from "../component/addedProductModal.component";
import { Product } from "../data/interfaces";
export class HomePage extends PageFactory {
	readonly page: Page;
	readonly homeSlider: Locator;
	readonly homeFeaturesProducts: Locator;
	readonly activeSlider: Locator;
	readonly activeSliderH2: Locator;
	readonly productCards: Locator;
	readonly addedProductModal: AddedProductModal;
	readonly productsButton: Locator;
	readonly recommendedItemsCarousel: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
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
		this.productsButton = page.locator("a[href='/products']");
	}

	async waitForRoot() {
		await this.homeSlider.waitFor({ state: "visible" });
	}

	async validateHomePage() {
		await this.waitForRoot();
		await this.homeSlider.isVisible();
	}

	async getProductbyName(name: string) {
		//Future enhancement: This method can be enhanced to search for products in both the main product list and the recommended items carousel.
		return new ProductCard(this.productCards.filter({ hasText: name }).first());
	}

	async getProductByNameFromRecommendedItems(name: string) {
		const recommendedItems = this.recommendedItemsCarousel.locator(
			".product-image-wrapper"
		);
		return new ProductCard(recommendedItems.filter({ hasText: name }).first());
	}

	async addProductsToCart(products: Record<string, Product>) {
		for (const product of Object.values(products)) {
			const productCard = await this.getProductbyName(product.name);
			await productCard.addToCartOverlay();
			await this.addedProductModal.waitForModal();
			await this.addedProductModal.clickContinueShopping();
		}
	}

	async clickRecommendedProductButtonAddToCart(productName: string) {
		const productCard =
			await this.getProductByNameFromRecommendedItems(productName);
		await productCard.addToCart();
	}

	async clickViewCartFromModal() {
		await this.addedProductModal.waitForModal();
		await this.addedProductModal.clickViewCart();
	}

	async clickContinueShoppingFromModal() {
		await this.addedProductModal.waitForModal();
		await this.addedProductModal.clickContinueShopping();
	}

	async clickProductsButton() {
		// this should be removed and added to the header component
		await this.productsButton.click();
	}
}
