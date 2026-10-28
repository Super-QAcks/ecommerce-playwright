import { test, expect } from "@playwright/test";
import { HomePage } from "../pom/pages/homePage";
import { HeaderComponent } from "../pom/component/header.component";
import { ProductsPage } from "../pom/pages/productsPage";
import { CategoryProductPage } from "../pom/pages/categoryProductPage";
import { URL_BASE } from "../pom/data/urls";
import { PRODUCT_DETAILS, PRODUCT_CATEGORIES } from "../pom/data/products";
import { SidebarComponent } from "../pom/component/sidebar.component";
import { BrandProductPage } from "../pom/pages/brandProductPage";

test.describe("Products Page Tests", () => {
	let homePage: HomePage;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		await test.step("Launch browser and Navigate to url 'http://automationexercise.com'", async () => {
			await homePage.goto(URL_BASE);
		});
	});

	test("Test Case 09: Search Product", async ({ page }) => {
		const headerComponent = new HeaderComponent(page);
		const productsPage = new ProductsPage(page);

		await test.step("Verify that home page is visible successfully", async () => {
			await expect(await homePage.validateHomePage()).toBeTruthy();
		});

		await test.step("Click on 'Products' button", async () => {
			await headerComponent.clickProductsLink();
		});

		await test.step("Verify user is navigated to ALL PRODUCTS page successfully", async () => {
			await productsPage.waitForProductsPage();
		});

		await test.step("Enter product name in search input and click search button", async () => {
			await productsPage.fillSearchProduct(PRODUCT_DETAILS.default.name);
			await productsPage.clickSearchButton();
		});

		await test.step("Verify 'SEARCHED PRODUCTS' is visible", async () => {
			await productsPage.waitForSearchedProductsHeading();
			await expect(productsPage.searchedProductsHeading).toBeVisible();
		});

		await test.step("Verify all the products related to search are visible", async () => {
			const searchWord = PRODUCT_DETAILS.default.name;
			const resultCards =
				await productsPage.getSearchResultProductCards(searchWord);

			await expect(resultCards.length).toBeGreaterThan(0);

			for (const productCard of resultCards) {
				await expect(productCard.rootCard).toBeVisible();
				await expect(productCard.productName).toContainText(searchWord, {
					ignoreCase: true,
				});
			}
		});
	});

	test("Test Case 18: View Category Products", async ({ page }) => {
		const sidebarComponent = new SidebarComponent(page);
		const categoryProductPage = new CategoryProductPage(page);

		await test.step("Verify that categories are visible on left side bar", async () => {
			await sidebarComponent.waitForCategoryReady();
		});

		await test.step("Click on 'Women' category", async () => {
			await sidebarComponent.expandCategory(PRODUCT_CATEGORIES.women.id);
		});

		await test.step("Click on any category link under 'Women' category, for example: Tops", async () => {
			await sidebarComponent.selectSubCategory(
				PRODUCT_CATEGORIES.women.id,
				PRODUCT_CATEGORIES.women.subCategories.tops.id
			);
		});

		await test.step("Verify category page heading", async () => {
			await expect(categoryProductPage.categoryHeading).toContainText(
				PRODUCT_CATEGORIES.women.id
			);
		});

		await test.step("On left side bar, click on any sub-category link of 'Men' category", async () => {
			await sidebarComponent.expandCategory(PRODUCT_CATEGORIES.men.id);
			await sidebarComponent.selectSubCategory(
				PRODUCT_CATEGORIES.men.id,
				PRODUCT_CATEGORIES.men.subCategories.jeans.id
			);
		});

		await test.step("Verify that user is navigated to that category page", async () => {
			await expect(categoryProductPage.categoryHeading).toContainText(
				PRODUCT_CATEGORIES.men.id
			);
		});
	});

	test("Test Case 19: View & Cart Brand Products", async ({ page }) => {
		const headerComponent = new HeaderComponent(page);
		const sidebarComponent = new SidebarComponent(page);
		const brandProductPage = new BrandProductPage(page);

		await test.step("Click on 'Products' button", async () => {
			await headerComponent.clickProductsLink();
		});

		await test.step("Verify that Brands are visible on left side bar", async () => {
			await sidebarComponent.waitForBrandsReady();
		});

		await test.step("Click on any brand name", async () => {
			const brand = PRODUCT_DETAILS.default.brand;
			if (brand === undefined) {
				throw new Error("A brand must be configured for this test");
			}
			await sidebarComponent.clickBrand(brand);
		});

		await test.step("Verify that user is navigated to brand page and brand products are displayed", async () => {
			const brand = PRODUCT_DETAILS.default.brand;
			if (brand === undefined) {
				throw new Error("A brand must be configured for this test");
			}
			await brandProductPage.waitForBrandProductPage();
			await expect(brandProductPage.brandHeading).toContainText(brand);
			await expect(brandProductPage.productCards.first()).toBeVisible();
		});

		await test.step("On left side bar, click on any other brand link", async () => {
			const otherBrand = "H&M"; // Replace with another brand name
			await sidebarComponent.clickBrand(otherBrand);
		});

		await test.step("Verify that user is navigated to that brand page and can see products", async () => {
			const otherBrand = "H&M"; // Replace with another brand name
			await brandProductPage.waitForBrandProductPage();
			await expect(brandProductPage.brandHeading).toContainText(otherBrand);
			await expect(brandProductPage.productCards.first()).toBeVisible();
		});
	});
});
