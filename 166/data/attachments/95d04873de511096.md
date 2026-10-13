# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/E2E.spec.ts >> E2E Tests >> Test Case 1: Register User
- Location: ui/tests/E2E.spec.ts:37:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Enter Account Information' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]: Test dummy
        - textbox "Email Address" [ref=e54]: 420test69@gmail.com
        - paragraph [ref=e55]: Email Address already exist!
        - button "Signup" [ref=e56] [cursor=pointer]
  - contentinfo [ref=e57]:
    - generic [ref=e62]:
      - heading "Subscription" [level=2] [ref=e63]
      - generic [ref=e64]:
        - textbox "Your email address" [ref=e65]
        - button "" [ref=e66] [cursor=pointer]:
          - generic [ref=e67]: 
        - paragraph [ref=e68]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e72]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e74]:
    - generic [ref=e77]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e79]: Discover more
      - link "Automated testing tools" [ref=e80] [cursor=pointer]:
        - generic "Automated testing tools" [ref=e81]
        - img [ref=e83]
      - link "Automation practice website" [ref=e85] [cursor=pointer]:
        - generic "Automation practice website" [ref=e86]
        - img [ref=e88]
      - link "Test automation courses" [ref=e90] [cursor=pointer]:
        - generic "Test automation courses" [ref=e91]
        - img [ref=e93]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import { HomePage } from "../pom/pages/homePage";
  3   | import { ProductDetailsPage } from "../pom/pages/productDetailsPage";
  4   | import { AddedProductModal } from "../pom/component/addedProductModal.component";
  5   | import { HeaderComponent } from "../pom/component/header.component";
  6   | import { CartPage } from "../pom/pages/CartPage";
  7   | import { URL_BASE } from "../pom/data/urls";
  8   | import { VALID_PRODUCTS } from "../pom/data/products";
  9   | import { LoginPage } from "../pom/pages/loginPage";
  10  | import { USER_SIGNUP, CARD_DETAILS } from "../pom/data/credentials";
  11  | import { SignUpPage } from "../pom/pages/signUpPage";
  12  | import { AccountCreatedPage } from "../pom/pages/accountCreatedPage";
  13  | import { CheckoutPage } from "../pom/pages/checkoutPage";
  14  | import { PaymentPage } from "../pom/pages/paymentPage";
  15  | import { PaymentDonePage } from "../pom/pages/paymentDonePage";
  16  | import { DeletedAccountPage } from "../pom/pages/deletedAccountPage";
  17  | 
  18  | test.describe("E2E Tests", () => {
  19  | 	let homePage: HomePage;
  20  | 	let productDetailsPage: ProductDetailsPage;
  21  | 	let addedProductModal: AddedProductModal;
  22  | 	let cartPage: CartPage;
  23  | 	let header: HeaderComponent;
  24  | 	let loginPage: LoginPage;
  25  | 	let signUpPage: SignUpPage;
  26  | 	let accounCreatedPage: AccountCreatedPage;
  27  | 	let checkoutPage: CheckoutPage;
  28  | 	let paymentPage: PaymentPage;
  29  | 	let paymentDonePage: PaymentDonePage;
  30  | 	let deletedAccountPage: DeletedAccountPage;
  31  | 
  32  | 	test.beforeEach(async ({ page }) => {
  33  | 		homePage = new HomePage(page);
  34  | 		cartPage = new CartPage(page);
  35  | 	});
  36  | 
  37  | 	test("Test Case 1: Register User", async ({ page }) => {
  38  | 		const headerComponent = new HeaderComponent(page);
  39  | 		const loginPage = new LoginPage(page);
  40  | 		const signUpPage = new SignUpPage(page);
  41  | 		const accounCreatedPage = new AccountCreatedPage(page);
  42  | 		const deletedAccountPage = new DeletedAccountPage(page);
  43  | 
  44  | 		await test.step("Navigate to url", async () => {
  45  | 			await homePage.goto(URL_BASE);
  46  | 		});
  47  | 
  48  | 		await test.step("Verify that home page is visible successfully", async () => {
  49  | 			await homePage.waitForRoot();
  50  | 		});
  51  | 
  52  | 		await test.step("Click on 'Signup / Login' button", async () => {
  53  | 			await headerComponent.clickSignUpLogin();
  54  | 		});
  55  | 
  56  | 		await test.step(" Verify 'New User Signup!' is visible", async () => {
  57  | 			await loginPage.waitForSignUpRoot();
  58  | 			await expect(loginPage.signUpFormTitle).toBeVisible();
  59  | 		});
  60  | 
  61  | 		await test.step("Enter name and email address and click 'Signup' button", async () => {
  62  | 			await loginPage.signUp(USER_SIGNUP.name, USER_SIGNUP.email);
  63  | 		});
  64  | 
  65  | 		await test.step("Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
> 66  | 			await signUpPage.signUpFormTitle.waitFor({ state: "visible" });
      |                                     ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  67  | 			await expect(signUpPage.signUpFormTitle).toBeVisible();
  68  | 		});
  69  | 
  70  | 		await test.step("Fill details: Title, Name, Email, Password, Date of birth", async () => {
  71  | 			await signUpPage.signUpForNews.click();
  72  | 			await expect(signUpPage.signUpForNews).toBeChecked();
  73  | 			await signUpPage.receiveSpecialOffers.click();
  74  | 			await expect(signUpPage.receiveSpecialOffers).toBeChecked();
  75  | 			await signUpPage.fillForm(USER_SIGNUP);
  76  | 		});
  77  | 
  78  | 		await test.step("Verify that 'ACCOUNT CREATED!' is visible", async () => {
  79  | 			await accounCreatedPage.waitForRoot();
  80  | 			await expect(accounCreatedPage.successMessage).toContainText(
  81  | 				"Account Created!"
  82  | 			);
  83  | 		});
  84  | 
  85  | 		await test.step("Click 'Continue' button", async () => {
  86  | 			await accounCreatedPage.clickContinueButton();
  87  | 		});
  88  | 
  89  | 		await test.step("Verify that 'Logged in as username' is visible", async () => {
  90  | 			await expect(headerComponent.loggedUserName).toHaveText(USER_SIGNUP.name);
  91  | 		});
  92  | 
  93  | 		await test.step("Click 'Delete Account' button", async () => {
  94  | 			await headerComponent.clickDeleteAccount();
  95  | 		});
  96  | 
  97  | 		await test.step("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async () => {
  98  | 			await deletedAccountPage.waitForRoot();
  99  | 			await expect(deletedAccountPage.accountDeletedTitle).toContainText(
  100 | 				"Account Deleted!"
  101 | 			);
  102 | 			await deletedAccountPage.clickContinue();
  103 | 		});
  104 | 	});
  105 | 
  106 | 	test("Test Case 13: Verify Product quantity in Cart", async ({ page }) => {
  107 | 		productDetailsPage = new ProductDetailsPage(page);
  108 | 		addedProductModal = new AddedProductModal(page);
  109 | 		const product = VALID_PRODUCTS.default;
  110 | 		const productCard = await homePage.getProductbyName(product.name);
  111 | 		const cartItem = await cartPage.getCartItemByName(
  112 | 			VALID_PRODUCTS.default.name
  113 | 		);
  114 | 
  115 | 		await test.step("Navigate to url", async () => {
  116 | 			await homePage.goto(URL_BASE);
  117 | 		});
  118 | 
  119 | 		await test.step("Verify that home page is visible successfully", async () => {
  120 | 			await homePage.waitForRoot();
  121 | 		});
  122 | 
  123 | 		await test.step("Click 'View Product' for any product on home page", async () => {
  124 | 			await productCard.viewProduct();
  125 | 		});
  126 | 
  127 | 		await test.step("Verify product detail is opened", async () => {
  128 | 			await expect(productDetailsPage.productDetailsRoot).toBeVisible();
  129 | 		});
  130 | 
  131 | 		await test.step("Increase quantity to 4", async () => {
  132 | 			await productDetailsPage.changeQuantity(product.quantity);
  133 | 		});
  134 | 
  135 | 		await test.step("Click 'Add to cart' button", async () => {
  136 | 			await productDetailsPage.addToCart();
  137 | 		});
  138 | 
  139 | 		await test.step("Click 'View Cart' button", async () => {
  140 | 			await addedProductModal.waitForModal();
  141 | 			await addedProductModal.clickViewCart();
  142 | 		});
  143 | 
  144 | 		await test.step("Verify that product is displayed in cart page with exact quantity", async () => {
  145 | 			await cartPage.waitForCart();
  146 | 
  147 | 			await expect(cartItem.productQuantity).toHaveText(
  148 | 				VALID_PRODUCTS.default.quantity.toString()
  149 | 			);
  150 | 		});
  151 | 	});
  152 | 
  153 | 	test("Test Case 14: Place Order: Register while Checkout", async ({
  154 | 		page,
  155 | 	}) => {
  156 | 		header = new HeaderComponent(page);
  157 | 		loginPage = new LoginPage(page);
  158 | 		signUpPage = new SignUpPage(page);
  159 | 		accounCreatedPage = new AccountCreatedPage(page);
  160 | 		checkoutPage = new CheckoutPage(page);
  161 | 		paymentPage = new PaymentPage(page);
  162 | 		paymentDonePage = new PaymentDonePage(page);
  163 | 		deletedAccountPage = new DeletedAccountPage(page);
  164 | 
  165 | 		await test.step("Navigate to url", async () => {
  166 | 			await homePage.goto(URL_BASE);
```