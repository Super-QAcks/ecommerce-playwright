import { test, expect } from "@playwright/test";
import { VALID_PRODUCTS } from "../pom/data/products";
import { URL_BASE } from "../pom/data/urls";
import { HomePage } from "../pom/pages/homePage";
import { CartPage } from "../pom/pages/cartPage";
import { HeaderComponent } from "../pom/component/header.component";
import { FooterComponent } from "../pom/component/footeer.component";
import { AddedProductModal } from "../pom/component/addedProductModal.component";
import { USER_SIGNUP } from "../pom/data/credentials";
import { ProductsPage } from "../pom/pages/productsPage";
import { Product } from "../pom/data/interfaces";

test.describe("Cart Test Cases", async () => {
	test("Test Case 11: Verify Subscription in Cart page", async ({ page }) => {
		const homePage = new HomePage(page);
		const cartPage = new CartPage(page);
		const headerComponent = new HeaderComponent(page);
		const footerComponent = new FooterComponent(page);

		await test.step("Launch browser and navigate to url", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Click 'Cart' button", async () => {
			await headerComponent.clickCart();
			await cartPage.waitForCart();
		});

		await test.step("Scroll down to footer", async () => {
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
		});

		await test.step("Verify text 'SUBSCRIPTION", async () => {
			await expect(footerComponent.susbcriptionTitle).toBeVisible();
		});

		await test.step("Enter email address in input and click arrow button", async () => {
			await footerComponent.fillSubscription(USER_SIGNUP.email);
			await footerComponent.clickSubscriptionButton();
		});

		await test.step("Verify success message 'You have been successfully subscribed!' is visible", async () => {
			await expect(footerComponent.successSubscribeMessage).toBeVisible();
		});
	});

	test("Test Case 12: Add Products in Cart", async ({ page }) => {
		const homePage = new HomePage(page);
		const cartPage = new CartPage(page);
		const headerComponent = new HeaderComponent(page);
		const productsPage = new ProductsPage(page);
		const expectedProducts: Product[] = [];

		await test.step("Navigate to url", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Click 'Products' button", async () => {
			await headerComponent.clickProductsLink();
			await productsPage.waitForProductsPage();
		});

		await test.step("Hover over first product and click 'Add to cart'", async () => {
			const firstProduct =
				await productsPage.getProductDataFromProductCardbyListNumber(1);
			expectedProducts.push(firstProduct);

			await productsPage.clickAddToCartOnProductCardbyListNumber(1);
		});

		await test.step("Click 'Continue Shopping' button", async () => {
			await productsPage.clickContinueShoppingOverModal();
		});

		await test.step("Hover over second product and click 'Add to cart'", async () => {
			const secondProduct =
				await productsPage.getProductDataFromProductCardbyListNumber(2);
			expectedProducts.push(secondProduct);

			await productsPage.clickAddToCartOnProductCardbyListNumber(2);
		});

		await test.step("Click 'View Cart' button", async () => {
			await productsPage.clickViewCartOverModal();
		});

		await test.step("Verify both products are added to Cart", async () => {
			const rowCount = await cartPage.getRowCount();
			expect(await rowCount).toBe(expectedProducts.length);

			for (const expected of expectedProducts) {
				const row = await cartPage.getCartItemByName(expected.name);
				expect(await row.getProductName()).toBe(expected.name);
			}
		});

		await test.step("Verify their prices, quantity and total price", async () => {
			for (const expected of expectedProducts) {
				const row = await cartPage.getCartItemByName(expected.name);
				expect(await row.getProductPrice()).toBe(expected.price);
				expect(await row.getProductQuantity()).toBe(1);
				expect(await row.getTotalPrice()).toBe(expected.price);
			}
		});
	});

	test("Test Case 17: Remove Products From Cart", async ({ page }) => {
		const homePage = new HomePage(page);
		const cartPage = new CartPage(page);
		const addedProductModal = new AddedProductModal(page);
		const product = VALID_PRODUCTS.greenTshirt;
		const productCard = await homePage.getProductbyName(product.name);
		const cartItem = await cartPage.getCartItemByName(product.name);

		await test.step("Navigate to url", async () => {
			await homePage.goto(URL_BASE);
		});

		await test.step("Verify that home page is visible successfully", async () => {
			await homePage.waitForRoot();
		});

		await test.step("Add products to cart", async () => {
			await productCard.addToCart();
		});

		await test.step("Click 'Cart' button", async () => {
			await addedProductModal.waitForModal();
			await addedProductModal.clickViewCart();
		});

		await test.step("Verify that cart page is displayed", async () => {
			await cartPage.waitForCart();
		});

		await test.step("Click 'X' button corresponding to particular product", async () => {
			await cartItem.deleteItem();
		});

		await test.step("Verify that product is removed from the cart", async () => {
			await expect(cartItem.rootCard).toBeHidden();
		});
	});
});
