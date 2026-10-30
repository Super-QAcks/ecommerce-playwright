import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import { ContactForm } from "../data/interfaces";

export class ContactUsPage extends BasePage {
	private readonly contactUsFormRoot: Locator;
	private readonly nameInput: Locator;
	private readonly emailInput: Locator;
	private readonly subjectInput: Locator;
	private readonly messageInput: Locator;
	private readonly submitButton: Locator;
	readonly successMessage: Locator;
	private readonly homeButton: Locator;

	constructor(page: Page) {
		super(page);
		this.contactUsFormRoot = page.locator("#contact-page");
		this.nameInput = page.getByTestId("name");
		this.emailInput = page.getByTestId("email");
		this.subjectInput = page.getByTestId("subject");
		this.messageInput = page.getByTestId("message");
		this.submitButton = page.getByTestId("submit-button");
		this.successMessage = this.contactUsFormRoot.getByText(
			"Success! Your details have been submitted successfully."
		);
		this.homeButton = page.getByRole("link", { name: " Home" });
	}

	/** Fills the contact form. Only `email` is required; empty fields are skipped. Does not submit. */
	async fillContactForm(formData: ContactForm) {
		if (formData.name) {
			await this.nameInput.fill(formData.name);
		}

		await this.emailInput.fill(formData.email);

		if (formData.subject) {
			await this.subjectInput.fill(formData.subject);
		}

		if (formData.message) {
			await this.messageInput.fill(formData.message);
		}
	}

	/**
	 * Clicks "Submit". The site shows a confirm dialog, so register a
	 * `page.on("dialog")` handler before calling it.
	 */
	async submitForm() {
		await this.submitButton.click();
	}

	/** Clicks the "Home" button shown after a successful submission. */
	async clickHome() {
		await this.homeButton.click();
	}

	async waitForRoot() {
		await this.contactUsFormRoot.waitFor({ state: "visible" });
		await this.waitForPageScripts();
	}
}
