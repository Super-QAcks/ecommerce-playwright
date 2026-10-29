import { Locator, Page, expect } from "@playwright/test";
import { BaseComponent } from "./base.component";
import { escapeAttr, nameWithOptionalCount } from "../utils/selectors";

// Bootstrap marks an open accordion panel with the class "in"
const OPEN_PANEL_CLASS = /(^|\s)in(\s|$)/;

export class SidebarComponent extends BaseComponent {
	readonly categoryTitle: Locator;
	readonly brandsTitle: Locator;
	private readonly categoryAccordion: Locator;
	private readonly categoryLinks: Locator;
	private readonly brandsList: Locator;
	private readonly brandItems: Locator;

	constructor(page: Page) {
		super(page.locator(".left-sidebar"));
		this.categoryTitle = this.root.getByRole("heading", {
			name: "Category",
		});
		this.brandsTitle = this.root.getByRole("heading", {
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

	/** Bootstrap's click handler is attached by a script that runs before DOMContentLoaded. */
	private async waitForPageScripts() {
		await this.root.page().waitForLoadState("domcontentloaded");
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

	async waitForCategoriesReady() {
		await this.categoryTitle.waitFor({ state: "visible" });
		await this.categoryAccordion.waitFor({ state: "visible" });
	}

	// ---- Actions ----
	/** Flips the panel state. Use expandCategory/collapseCategory in flows. */
	async toggleCategory(category: string) {
		await this.categoryToggle(category).click();
	}

	/** Opens the panel if it is closed, and waits until it is open. Safe to call twice. */
	async expandCategory(category: string) {
		await this.waitForPageScripts();
		if (!(await this.isCategoryExpanded(category))) {
			await this.categoryToggle(category).click();
		}
		await expect(this.categoryPanel(category)).toHaveClass(OPEN_PANEL_CLASS);
	}

	/** Closes the panel if it is open, and waits until it is closed. Safe to call twice. */
	async collapseCategory(category: string) {
		await this.waitForPageScripts();
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

	/** Trims each text and drops empty entries. */
	private cleanNames(raw: string[]): string[] {
		return raw.map((t) => t.trim()).filter(Boolean);
	}

	async getCategoryNames(): Promise<string[]> {
		await this.categoryLinks.first().waitFor({ state: "visible" });
		return this.cleanNames(await this.categoryLinks.allTextContents());
	}

	async getSubCategoryNames(category: string): Promise<string[]> {
		const items = this.subCategoryItems(category);
		await items.first().waitFor({ state: "attached" });
		return this.cleanNames(await items.allTextContents());
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

	async waitForBrandsReady() {
		await this.brandsTitle.waitFor({ state: "visible" });
		await this.brandsList.waitFor({ state: "visible" });
	}

	// ---- Actions ----
	async clickBrand(brand: string) {
		await this.brandLink(brand).click();
	}

	// ---- Queries ----

	/** Brand names without the product count, e.g. "Polo (6)" becomes "Polo". */
	async getBrandNames(): Promise<string[]> {
		const links = this.brandItems.locator("a");
		await links.first().waitFor({ state: "visible" });
		const raw = await links.allTextContents();
		return this.cleanNames(raw.map((t) => t.replace(/\(\d+\)/g, "")));
	}
}
