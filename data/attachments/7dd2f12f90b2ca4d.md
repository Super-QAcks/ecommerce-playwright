# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/products.spec.ts >> Products Page Tests >> sidebar queries return the names in PRODUCT_CATEGORIES
- Location: ui/tests/products.spec.ts:129:2

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.left-sidebar').locator('#accordian').locator('.panel-title a').first() to be visible

```

# Test source

```ts
  21  | 		this.brandsTitle = this.root.getByRole("heading", {
  22  | 			name: "Brands",
  23  | 		});
  24  | 		this.categoryAccordion = this.root.locator("#accordian");
  25  | 		this.categoryLinks = this.categoryAccordion.locator(".panel-title a");
  26  | 		this.brandsList = this.root.locator(".brands_products");
  27  | 		this.brandItems = this.root.locator(".brands-name");
  28  | 	}
  29  | 
  30  | 	// =========================================================
  31  | 	// COMPONENT READINESS
  32  | 	// =========================================================
  33  | 
  34  | 	override async waitForReady(): Promise<void> {
  35  | 		await super.waitForReady();
  36  | 		await this.categoryAccordion.waitFor({ state: "visible" });
  37  | 		await this.brandsList.waitFor({ state: "visible" });
  38  | 	}
  39  | 
  40  | 	/** Bootstrap's click handler is attached by a script that runs before DOMContentLoaded. */
  41  | 	private async waitForPageScripts() {
  42  | 		await this.root.page().waitForLoadState("domcontentloaded");
  43  | 	}
  44  | 
  45  | 	// =========================================================
  46  | 	// CATEGORY SECTION
  47  | 	// =========================================================
  48  | 
  49  | 	// ---- Locators ----
  50  | 	private categoryToggle(category: string): Locator {
  51  | 		return this.root.locator(`a[href="#${escapeAttr(category)}"]`);
  52  | 	}
  53  | 
  54  | 	private categoryPanel(category: string): Locator {
  55  | 		return this.root.locator(`[id="${escapeAttr(category)}"]`);
  56  | 	}
  57  | 
  58  | 	private subCategoryLink(category: string, subCategory: string): Locator {
  59  | 		return this.categoryPanel(category).getByRole("link", {
  60  | 			name: subCategory,
  61  | 			exact: true,
  62  | 		});
  63  | 	}
  64  | 
  65  | 	private subCategoryItems(category: string): Locator {
  66  | 		return this.categoryPanel(category).locator("ul li a");
  67  | 	}
  68  | 
  69  | 	// ---- Waits ----
  70  | 
  71  | 	async waitForCategoriesReady() {
  72  | 		await this.categoryTitle.waitFor({ state: "visible" });
  73  | 		await this.categoryAccordion.waitFor({ state: "visible" });
  74  | 	}
  75  | 
  76  | 	// ---- Actions ----
  77  | 	/** Flips the panel state. Use expandCategory/collapseCategory in flows. */
  78  | 	async toggleCategory(category: string) {
  79  | 		await this.categoryToggle(category).click();
  80  | 	}
  81  | 
  82  | 	/** Opens the panel if it is closed, and waits until it is open. Safe to call twice. */
  83  | 	async expandCategory(category: string) {
  84  | 		await this.waitForPageScripts();
  85  | 		if (!(await this.isCategoryExpanded(category))) {
  86  | 			await this.categoryToggle(category).click();
  87  | 		}
  88  | 		await expect(this.categoryPanel(category)).toHaveClass(OPEN_PANEL_CLASS);
  89  | 	}
  90  | 
  91  | 	/** Closes the panel if it is open, and waits until it is closed. Safe to call twice. */
  92  | 	async collapseCategory(category: string) {
  93  | 		await this.waitForPageScripts();
  94  | 		if (await this.isCategoryExpanded(category)) {
  95  | 			await this.categoryToggle(category).click();
  96  | 		}
  97  | 		await expect(this.categoryPanel(category)).not.toHaveClass(
  98  | 			OPEN_PANEL_CLASS
  99  | 		);
  100 | 	}
  101 | 
  102 | 	async selectSubCategory(category: string, subCategory: string) {
  103 | 		await this.expandCategory(category);
  104 | 		await this.subCategoryLink(category, subCategory).click();
  105 | 	}
  106 | 
  107 | 	// ---- Queries ----
  108 | 
  109 | 	/** Snapshot check, does not retry. Use expandCategory/collapseCategory to wait. */
  110 | 	async isCategoryExpanded(category: string): Promise<boolean> {
  111 | 		const classes = await this.categoryPanel(category).getAttribute("class");
  112 | 		return OPEN_PANEL_CLASS.test(classes ?? "");
  113 | 	}
  114 | 
  115 | 	/** Trims each text and drops empty entries. */
  116 | 	private cleanNames(raw: string[]): string[] {
  117 | 		return raw.map((t) => t.trim()).filter(Boolean);
  118 | 	}
  119 | 
  120 | 	async getCategoryNames(): Promise<string[]> {
> 121 | 		await this.categoryLinks.first().waitFor({ state: "visible" });
      |                                    ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  122 | 		return this.cleanNames(await this.categoryLinks.allTextContents());
  123 | 	}
  124 | 
  125 | 	async getSubCategoryNames(category: string): Promise<string[]> {
  126 | 		const items = this.subCategoryItems(category);
  127 | 		await items.first().waitFor({ state: "attached" });
  128 | 		return this.cleanNames(await items.allTextContents());
  129 | 	}
  130 | 
  131 | 	// =========================================================
  132 | 	// BRANDS SECTION
  133 | 	// =========================================================
  134 | 
  135 | 	// ---- Locators ----
  136 | 
  137 | 	private brandLink(brand: string): Locator {
  138 | 		return this.brandItems.getByRole("link", {
  139 | 			name: nameWithOptionalCount(brand),
  140 | 		});
  141 | 	}
  142 | 
  143 | 	// ---- Waits ----
  144 | 
  145 | 	async waitForBrandsReady() {
  146 | 		await this.brandsTitle.waitFor({ state: "visible" });
  147 | 		await this.brandsList.waitFor({ state: "visible" });
  148 | 	}
  149 | 
  150 | 	// ---- Actions ----
  151 | 	async clickBrand(brand: string) {
  152 | 		await this.brandLink(brand).click();
  153 | 	}
  154 | 
  155 | 	// ---- Queries ----
  156 | 
  157 | 	/** Brand names without the product count, e.g. "Polo (6)" becomes "Polo". */
  158 | 	async getBrandNames(): Promise<string[]> {
  159 | 		const links = this.brandItems.locator("a");
  160 | 		await links.first().waitFor({ state: "visible" });
  161 | 		const raw = await links.allTextContents();
  162 | 		return this.cleanNames(raw.map((t) => t.replace(/\(\d+\)/g, "")));
  163 | 	}
  164 | }
  165 | 
```