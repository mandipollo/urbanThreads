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
	size: string;
	category: string;
	subCategory: string;
	image: string;
}
