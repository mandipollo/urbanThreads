export interface Product {
	_id: string;
	name: string;
	description: string;
	price: number;
	sizes: string[];
	category: string;
	subCategory: string;
	date: Date;
	bestseller: boolean;
	image: string[];
}

export interface CartProduct {
	_id: string;
	name: string;
	description: string;
	price: number;
	sizes: string[];
	category: string;
	subCategory: string;
	date: Date;
	bestseller: boolean;
	image: string[];
	size: string;
}

export interface OrderProduct {
	image: string;
	name: string;
	price: number;
	productId: string;
}

export interface Order {
	createdAt: Date;
	items: OrderProduct[];
	orderStatus: "Processing";
	totalAmount: number;
	_id: string;
}
