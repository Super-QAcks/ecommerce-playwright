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

export const RECOMMENDED_PRODUCTS = {
	default: {
		name: "Men Tshirt",
		price: 400,
	} as Product,
	"1000": {
		name: "Rs. 1000",
		price: 1000,
	} as Product,
	Stylish_Dress: {
		name: "Stylish Dress",
		price: 1500,
	} as Product,
	Winter_Top: {
		name: "Winter Top",
		price: 600,
	} as Product,
	Summer_White_Top: {
		name: "Summer White Top",
		price: 400,
	} as Product,
	Blue_Top: {
		name: "Blue Top",
		price: 500,
	} as Product,
};
