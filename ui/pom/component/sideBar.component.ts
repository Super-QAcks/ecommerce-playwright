import { Locator, Page } from "@playwright/test";
import { ComponentFactory } from "./componentFactory";

export class SideBarComponent extends ComponentFactory {
	readonly page: Page;
	readonly sideBarCategoryTitle: Locator;

	constructor(page: Page) {
		super(page, page.locator(".left-sidebar"));
		this.page = page;
		this.sideBarCategoryTitle = this.page.getByRole("heading", {
			name: "Category",
		});
	}

	// =========================================================
	// CATEGORY SECTION
	// =========================================================

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
	async expandCategory(category: string) {
		if (!(await this.isCategoryExpanded(category))) {
			await this.categoryToggle(category).click();
			await this.categoryPanel(category).waitFor({ state: "visible" });
		}
	}

	async collapseCategory(category: string) {
		if (await this.isCategoryExpanded(category)) {
			await this.categoryToggle(category).click();
		}
	}

	async selectSubCategory(category: string, subCategory: string) {
		await this.expandCategory(category);
		await this.subCategoryLink(category, subCategory).click();
	}

	// ---- Queries ----
	async waitForSideBar() {
		await this.sideBarCategoryTitle.waitFor({ state: "visible" });
	}

	async isCategoryExpanded(category: string): Promise<boolean> {
		const classAttr = await this.categoryPanel(category).getAttribute("class");
		return classAttr?.includes("in") ?? false;
	}

	// =========================================================
	// BRANDS SECTION
	// =========================================================
	// TODO: brands locators/actions/queries g
	//
}
