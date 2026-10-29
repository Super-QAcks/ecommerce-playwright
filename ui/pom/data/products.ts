import { Product, ProductDetails, ProductSummary } from "./interfaces";

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

export const VALID_PRODUCTS = {
	default: {
		name: "Blue Top",
		quantity: 4,
		price: 500,
	} satisfies Product,
	greenTshirt: {
		name: "Pure Cotton Neon Green Tshirt",
		quantity: 2,
		price: 50,
	} satisfies Product,
	fancyGreenTop: {
		name: "Fancy Green Top",
		quantity: 1,
		price: 700,
	} satisfies Product,
};

export const PRODUCT_DETAILS = {
	default: {
		name: "Blue Top",
		quantity: 4,
		price: 500,
		category: "Women > Tops",
		availability: "In Stock",
		condition: "New",
		brand: "Polo",
	} satisfies Product,
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

export const RECOMMENDED_PRODUCTS = {
	default: {
		name: "Men Tshirt",
		price: 400,
	} satisfies Product,
	"1000": {
		name: "Rs. 1000",
		price: 1000,
	} satisfies Product,
	Stylish_Dress: {
		name: "Stylish Dress",
		price: 1500,
	} satisfies Product,
	Winter_Top: {
		name: "Winter Top",
		price: 600,
	} satisfies Product,
	Summer_White_Top: {
		name: "Summer White Top",
		price: 400,
	} satisfies Product,
	Blue_Top: {
		name: "Blue Top",
		price: 500,
	} satisfies Product,
};
