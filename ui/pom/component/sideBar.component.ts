import { Locator, Page } from "@playwright/test";
import { ComponentFactory } from "./componentFactory";

export class SideBarComponent extends ComponentFactory {
	readonly page: Page;
	readonly sideBarCategoryTitle: Locator;
	readonly sideBarBrandsTitle: Locator;

	constructor(page: Page) {
		super(page, page.locator(".left-sidebar"));
		this.page = page;
		this.sideBarCategoryTitle = this.page.getByRole("heading", {
			name: "Category",
		});
		this.sideBarBrandsTitle = this.page.getByRole("heading", {
			name: "Brands",
		});
	}

	// =========================================================
	// CATEGORY SECTION
	// =========================================================

	async waitForCategorySideBar() {
		await this.sideBarCategoryTitle.waitFor({ state: "visible" });
		await this.root.locator("#accordian").waitFor({ state: "visible" });
	}

	// ---- Locators ----
	private categoryToggle(category: string): Locator {
		return this.root.locator(`a[href="#${category}"]`);
	}

	private categoryPanel(category: string): Locator {
		return this.root.locator(`#${category}`);
	}

	private subCategoryLink(category: string, subCategory: string): Locator {
		return this.categoryPanel(category).getByRole("link", {
			name: subCategory,
		});
	}

	// ---- Actions ----
	async toggleCategory(category: string) {
		await this.categoryToggle(category).click();
	}

	async selectSubCategory(category: string, subCategory: string) {
		// no expand check here — click() auto-waits for the link to be
		// visible/stable, which only happens once the accordion animation
		// finishes opening it
		await this.subCategoryLink(category, subCategory).click();
	}

	// ---- Queries ----
	async getCategoryNames(): Promise<string[]> {
		const raw = await this.root
			.locator("#accordian .panel-title a")
			.allTextContents();
		return raw.map((t) => t.trim());
	}

	async getSubCategoryNames(category: string): Promise<string[]> {
		const raw = await this.categoryPanel(category)
			.locator("ul li a")
			.allTextContents();
		return raw.map((t) => t.trim());
	}

	// =========================================================
	// BRANDS SECTION
	// =========================================================
	// TODO: brands locators/actions/queries g
	//

	async waitForBrandsSideBar() {
		await this.sideBarBrandsTitle.waitFor({ state: "visible" });
		await this.root.locator(".brands_products").waitFor({ state: "visible" });
	}

	// ---- Locators ----

	private brandPanel(brand: string): Locator {
		return this.root.locator(`.brands-name a:has-text("${brand}")`);
	}

	// ---- Actions ----
	async clickBrand(brand: string) {
		await this.brandPanel(brand).click();
	}
}
