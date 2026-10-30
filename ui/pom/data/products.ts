import { ProductDetails, ProductSummary } from "./interfaces";

/** One definition per product. Tests pick the products they need from here. */
export const PRODUCTS = {
	blueTop: {
		name: "Blue Top",
		price: 500,
		category: "Women > Tops",
		availability: "In Stock",
		condition: "New",
		brand: "Polo",
	} satisfies ProductDetails,
	greenTshirt: {
		name: "Pure Cotton Neon Green Tshirt",
		price: 50,
	} satisfies ProductSummary,
	fancyGreenTop: {
		name: "Fancy Green Top",
		price: 700,
	} satisfies ProductSummary,
	menTshirt: {
		name: "Men Tshirt",
		price: 400,
	} satisfies ProductSummary,
	rs1000: {
		name: "Rs. 1000",
		price: 1000,
	} satisfies ProductSummary,
	stylishDress: {
		name: "Stylish Dress",
		price: 1500,
	} satisfies ProductSummary,
	winterTop: {
		name: "Winter Top",
		price: 600,
	} satisfies ProductSummary,
	summerWhiteTop: {
		name: "Summer White Top",
		price: 400,
	} satisfies ProductSummary,
};

export const PRODUCT_CATEGORIES = {
	women: {
		id: "Women",
		heading: "WOMEN",
		subCategories: {
			dress: {
				id: "Dress",
				heading: "DRESS",
			},
			tops: {
				id: "Tops",
				heading: "TOPS",
			},
			saree: {
				id: "Saree",
				heading: "SAREE",
			},
		},
	},
	men: {
		id: "Men",
		heading: "MEN",
		subCategories: {
			tshirts: {
				id: "Tshirts",
				heading: "TSHIRTS",
			},
			jeans: {
				id: "Jeans",
				heading: "JEANS",
			},
		},
	},
	kids: {
		id: "Kids",
		heading: "KIDS",
		subCategories: {
			dress: {
				id: "Dress",
				heading: "DRESS",
			},
			topsAndShirts: {
				id: "Tops & Shirts",
				heading: "TOPS & SHIRTS",
			},
		},
	},
} as const;
