import { Product } from "./interfaces";

export const VALID_PRODUCTS = {
	default: {
		name: "Blue Top",
		quantity: 4,
		price: 500,
	} as Product,
	greenTshirt: {
		name: "Pure Cotton Neon Green Tshirt",
		quantity: 2,
		price: 50,
	} as Product,
	fancyGreenTop: {
		name: "Fancy Green Top",
		quantity: 1,
		price: 700,
	} as Product,
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
	} as Product,
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
				id: "SAREE",
				heading: "SAREE",
			},
		},
	},
	men: {
		id: "Men",
		heading: "MEN",
		subCategories: {
			tshirts: {
				id: "TSHIRTS",
				heading: "TSHIRTS",
			},
			jeans: {
				id: "JEANS",
				heading: "JEANS",
			},
		},
	},
	kids: {
		id: "Kids",
		heading: "KIDS",
		subCategories: {
			dress: {
				id: "DRESS",
				heading: "DRESS",
			},
			topsAndShirts: {
				id: "TOPS & SHIRTS",
				heading: "TOPS & SHIRTS",
			},
		},
	},
};
