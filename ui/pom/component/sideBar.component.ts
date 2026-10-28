import { Locator, Page, expect } from "@playwright/test";
import { BaseComponent } from "./baseComponent";
import { escapeAttr, nameWithOptionalCount } from "../utils/selectors";

// Bootstrap marks an open accordion panel with the class "in"
const OPEN_PANEL_CLASS = /(^|\s)in(\s|$)/;

export class SideBarComponent extends BaseComponent {
	readonly sideBarCategoryTitle: Locator;
	readonly sideBarBrandsTitle: Locator;
	private readonly categoryAccordion: Locator;
	private readonly categoryLinks: Locator;
	private readonly brandsList: Locator;
	private readonly brandItems: Locator;

	constructor(page: Page) {
		super(page.locator(".left-sidebar"));
		this.sideBarCategoryTitle = this.root.getByRole("heading", {
			name: "Category",
		});
		this.sideBarBrandsTitle = this.root.getByRole("heading", {
			name: "Brands",
		});
		this.categoryAccordion = this.root.locator("#accordian");
		this.categoryLinks = this.categoryAccordion.locator(".panel-title a");
		this.brandsList = this.root.locator(".brands_products");
		this.brandItems = this.root.locator(".brands-name");
	}

	// =========================================================
	// COMPONENT READINESS
	// =========================================================

	override async waitForReady(): Promise<void> {
		await super.waitForReady();
		await this.categoryAccordion.waitFor({ state: "visible" });
		await this.brandsList.waitFor({ state: "visible" });
	}

	// =========================================================
	// CATEGORY SECTION
	// =========================================================

	// ---- Locators ----
	private categoryToggle(category: string): Locator {
		return this.root.locator(`a[href="#${escapeAttr(category)}"]`);
	}

	private categoryPanel(category: string): Locator {
		return this.root.locator(`[id="${escapeAttr(category)}"]`);
	}

	private subCategoryLink(category: string, subCategory: string): Locator {
		return this.categoryPanel(category).getByRole("link", {
			name: subCategory,
			exact: true,
		});
	}

	private subCategoryItems(category: string): Locator {
		return this.categoryPanel(category).locator("ul li a");
	}

	// ---- Waits ----

	async waitForCategorySideBar() {
		await this.sideBarCategoryTitle.waitFor({ state: "visible" });
		await this.categoryAccordion.waitFor({ state: "visible" });
	}

	// ---- Actions ----
	/** Flips the panel state. Use expandCategory/collapseCategory in flows. */
	async toggleCategory(category: string) {
		await this.categoryToggle(category).click();
	}

	/** Opens the panel if it is closed, and waits until it is open. Safe to call twice. */
	async expandCategory(category: string) {
		if (!(await this.isCategoryExpanded(category))) {
			await this.categoryToggle(category).click();
		}
		await expect(this.categoryPanel(category)).toHaveClass(OPEN_PANEL_CLASS);
	}

	/** Closes the panel if it is open, and waits until it is closed. Safe to call twice. */
	async collapseCategory(category: string) {
		if (await this.isCategoryExpanded(category)) {
			await this.categoryToggle(category).click();
		}
		await expect(this.categoryPanel(category)).not.toHaveClass(
			OPEN_PANEL_CLASS
		);
	}

	async selectSubCategory(category: string, subCategory: string) {
		await this.expandCategory(category);
		await this.subCategoryLink(category, subCategory).click();
	}

	// ---- Queries ----

	/** Snapshot check, does not retry. Use expandCategory/collapseCategory to wait. */
	async isCategoryExpanded(category: string): Promise<boolean> {
		const classes = await this.categoryPanel(category).getAttribute("class");
		return OPEN_PANEL_CLASS.test(classes ?? "");
	}

	async getCategoryNames(): Promise<string[]> {
		const raw = await this.categoryLinks.allTextContents();
		return raw.map((t) => t.trim());
	}

	async getSubCategoryNames(category: string): Promise<string[]> {
		const raw = await this.subCategoryItems(category).allTextContents();
		return raw.map((t) => t.trim());
	}

	// =========================================================
	// BRANDS SECTION
	// =========================================================

	// ---- Locators ----

	private brandLink(brand: string): Locator {
		return this.brandItems.getByRole("link", {
			name: nameWithOptionalCount(brand),
		});
	}

	// ---- Waits ----

	async waitForBrandsSideBar() {
		await this.sideBarBrandsTitle.waitFor({ state: "visible" });
		await this.brandsList.waitFor({ state: "visible" });
	}

	// ---- Actions ----
	async clickBrand(brand: string) {
		await this.brandLink(brand).click();
	}

	// ---- Queries ----

	/** Brand names without the product count, e.g. "Polo (6)" becomes "Polo". */
	async getBrandNames(): Promise<string[]> {
		const raw = await this.brandItems.locator("a").allTextContents();
		return raw.map((t) => t.replace(/\(\d+\)/g, "").trim()).filter(Boolean);
	}
}
