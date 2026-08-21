# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/E2E.spec.ts >> E2E Tests >> Test Case 13: Verify Product quantity in Cart
- Location: ui/tests/E2E.spec.ts:106:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-details')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.product-details')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- list:
  - listitem
  - listitem
  - listitem
- heading "AutomationExercise" [level=1]
- heading "Full-Fledged practice website for Automation Engineers" [level=2]
- paragraph:
  - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
  - link "Factory Automation":
    - img
    - text: Factory Automation
- link "Test Cases":
  - /url: /test_cases
  - button "Test Cases"
- link "APIs list for practice":
  - /url: /api_list
  - button "APIs list for practice"
- img "demo website for practice"
- link "":
  - /url: "#slider-carousel"
- link "":
  - /url: "#slider-carousel"
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- heading "Features Items" [level=2]
- img "ecommerce website products"
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/1
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph:
  - text: Men
  - link "Tshirt":
    - /url: "#"
    - img
    - text: Tshirt
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Men Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/2
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph:
  - text: Sleeveless
  - link "Dress":
    - /url: "#"
    - img
    - text: Dress
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Sleeveless Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/3
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/4
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/5
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/6
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/7
- img "ecommerce website products"
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/8
- img "ecommerce website products"
- heading "Rs. 499" [level=2]
- paragraph:
  - text: Sleeves Printed Top - White
  - link "Internet & Telecom":
    - img
    - text: Internet & Telecom
- text:  Add to cart
- heading "Rs. 499" [level=2]
- paragraph: Sleeves Printed Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/11
- img "ecommerce website products"
- heading "Rs. 359" [level=2]
- paragraph:
  - text: Half Sleeves Top Schiffli Detailing - Pink
  - link "Quality Control & Tracking":
    - img
    - text: Quality Control & Tracking
- text:  Add to cart
- heading "Rs. 359" [level=2]
- paragraph: Half Sleeves Top Schiffli Detailing - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/12
- img "ecommerce website products"
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/13
- img "ecommerce website products"
- heading "Rs. 679" [level=2]
- paragraph:
  - text: Full Sleeves Top Cherry - Pink
  - link "Development Tools":
    - img
    - text: Development Tools
- text:  Add to cart
- heading "Rs. 679" [level=2]
- paragraph: Full Sleeves Top Cherry - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/14
- img "ecommerce website products"
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/15
- img "ecommerce website products"
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/16
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/18
- img "ecommerce website products"
- heading "Rs. 1050" [level=2]
- paragraph:
  - text: Sleeveless Unicorn Patch Gown - Pink
  - link "T-Shirts":
    - img
    - text: T-Shirts
- text:  Add to cart
- heading "Rs. 1050" [level=2]
- paragraph: Sleeveless Unicorn Patch Gown - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/19
- img "ecommerce website products"
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/20
- img "ecommerce website products"
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/21
- img "ecommerce website products"
- heading "Rs. 1600" [level=2]
- paragraph:
  - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
  - link "Apparel":
    - img
    - text: Apparel
- text:  Add to cart
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/22
- img "ecommerce website products"
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/23
- img "ecommerce website products"
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/24
- img "ecommerce website products"
- heading "Rs. 1299" [level=2]
- paragraph:
  - text: Pure Cotton V-Neck
  - link "T-Shirt":
    - /url: "#"
    - img
    - text: T-Shirt
- text:  Add to cart
- heading "Rs. 1299" [level=2]
- paragraph: Pure Cotton V-Neck T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/28
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/29
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/30
- img "ecommerce website products"
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/31
- img "ecommerce website products"
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/33
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/35
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/37
- img "ecommerce website products"
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/38
- img "ecommerce website products"
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/39
- img "ecommerce website products"
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/40
- img "ecommerce website products"
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/41
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/42
- img "ecommerce website products"
- heading "Rs. 1389" [level=2]
- paragraph:
  - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
  - link "T-Shirts":
    - img
    - text: T-Shirts
- text:  Add to cart
- heading "Rs. 1389" [level=2]
- paragraph: GRAPHIC DESIGN MEN T SHIRT - BLUE
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/43
- heading "recommended items" [level=2]
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- link "":
  - /url: "#recommended-item-carousel"
- link "":
  - /url: "#recommended-item-carousel"
- insertion
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- link "":
  - /url: "#top"
```

# Test source

```ts
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
  66  | 			await signUpPage.signUpFormTitle.waitFor({ state: "visible" });
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
> 128 | 			await expect(productDetailsPage.productDetailsRoot).toBeVisible();
      |                                                        ^ Error: expect(locator).toBeVisible() failed
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
  167 | 		});
  168 | 
  169 | 		await test.step("Verify that home page is visible successfully", async () => {
  170 | 			await homePage.waitForRoot();
  171 | 		});
  172 | 		await test.step("Add products to cart", async () => {
  173 | 			await homePage.addProductsToCart(VALID_PRODUCTS);
  174 | 		});
  175 | 
  176 | 		await test.step("Click 'Cart' button", async () => {
  177 | 			await header.clickCart();
  178 | 		});
  179 | 
  180 | 		await test.step("Verify that cart page is displayed", async () => {
  181 | 			await cartPage.waitForCart();
  182 | 		});
  183 | 
  184 | 		await test.step("Click Proceed To Checkout", async () => {
  185 | 			await cartPage.clickCheckout();
  186 | 		});
  187 | 
  188 | 		await test.step("Click 'Register / Login' button", async () => {
  189 | 			await cartPage.waitForModalCheckout();
  190 | 			await cartPage.clickModalRegisterLogin();
  191 | 		});
  192 | 
  193 | 		await test.step("Fill all details in Signup and create account", async () => {
  194 | 			await loginPage.waitForSignUpRoot();
  195 | 			await loginPage.signUp(USER_SIGNUP.name, USER_SIGNUP.email);
  196 | 			await signUpPage.waitForRoot();
  197 | 			await signUpPage.fillForm(USER_SIGNUP);
  198 | 		});
  199 | 
  200 | 		await test.step("Verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {
  201 | 			await accounCreatedPage.waitForRoot();
  202 | 			await expect(accounCreatedPage.successMessage).toContainText(
  203 | 				"Account Created!"
  204 | 			);
  205 | 			await accounCreatedPage.clickContinueButton();
  206 | 		});
  207 | 
  208 | 		await test.step("Verify ' Logged in as username' at top", async () => {
  209 | 			await expect(header.loggedUserName).toHaveText(USER_SIGNUP.name);
  210 | 		});
  211 | 
  212 | 		await test.step("Click 'Cart' button", async () => {
  213 | 			await header.clickCart();
  214 | 		});
  215 | 
  216 | 		await test.step("Click 'Proceed To Checkout' button", async () => {
  217 | 			await cartPage.clickCheckout();
  218 | 		});
  219 | 
  220 | 		await test.step("Verify Address Details and Review Your Order", async () => {
  221 | 			//verify address details
  222 | 			await expect(checkoutPage.deliveryAddressForm).toContainText(
  223 | 				USER_SIGNUP.zipcode
  224 | 			);
  225 | 			//review order
  226 | 			await expect(checkoutPage.reviewOderSection).toContainText(
  227 | 				VALID_PRODUCTS.default.name
  228 | 			);
```