import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { ReviewForm } from "../data/interfaces";
import { AddedProductModal } from "../component/addedProductModal.component";

export class ProductDetailsPage extends BasePage {
	readonly productDetailsRoot: Locator;
	readonly productName: Locator;
	readonly productPrice: Locator;
	readonly productQuantityInput: Locator;
	readonly addToCartButton: Locator;
	readonly addedProductModal: AddedProductModal;
	readonly productAvailability: Locator;
	readonly productCondition: Locator;
	readonly productBrand: Locator;
	readonly productCategory: Locator;
	readonly productInformation: Locator;
	readonly reviewTitle: Locator;
	readonly reviewNameInput: Locator;
	readonly reviewEmailInput: Locator;
	readonly reviewTextInput: Locator;
	readonly reviewSubmitButton: Locator;
	readonly reviewSuccessMessage: Locator;

	constructor(page: Page) {
		super(page);
		this.productDetailsRoot = page.locator(".product-details");
		this.productName = page.locator(".product-information h2");
		this.productPrice = page.getByText("Rs.");
		this.productQuantityInput = page.locator("#quantity");
		this.addToCartButton = page.locator("button.cart");
		this.addedProductModal = new AddedProductModal(page);
		this.productAvailability = page.getByText(/Availability:/i);
		this.productCondition = page.getByText(/Condition:/i);
		this.productBrand = page.getByText(/Brand:/i);
		this.productCategory = page.getByText(/Category:/i);
		this.productInformation = page.locator(".product-information");
		this.reviewTitle = page.getByRole("link", { name: "Write Your Review" });
		this.reviewNameInput = page.getByRole("textbox", { name: "Your Name" });
		this.reviewEmailInput = page.getByRole("textbox", {
			name: "Email Address",
			exact: true,
		});
		this.reviewTextInput = page.getByRole("textbox", {
			name: "Add Review Here!",
		});
		this.reviewSubmitButton = page.getByRole("button", { name: "Submit" });
		this.reviewSuccessMessage = page.getByText("Thank you for your review.");
	}

	/** Waits for the product details block and for the page scripts. */
	async waitForRoot() {
		await this.productDetailsRoot.waitFor({ state: "visible" });
		await this.waitForPageScripts();
	}

	/** Clicks "Add to cart" with the quantity currently in the field. */
	async addToCart() {
		await this.addToCartButton.click();
	}

	/** Replaces the quantity field with `amount`. */
	async changeQuantity(amount: number) {
		await this.productQuantityInput.clear();
		await this.productQuantityInput.fill(amount.toString());
	}

	/** Fills name, email and review text. Does not submit. */
	async fillReviewForm(reviewData: ReviewForm) {
		await this.reviewNameInput.fill(reviewData.name);
		await this.reviewEmailInput.fill(reviewData.email);
		await this.reviewTextInput.fill(reviewData.review);
	}

	/** Waits for the page scripts, then submits the review form. */
	async submitReview() {
		await this.waitForPageScripts();
		await this.reviewSubmitButton.click();
	}
}
