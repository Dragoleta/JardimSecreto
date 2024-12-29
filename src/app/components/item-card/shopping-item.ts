export interface ShoppingItem {
	id: number;
	name: string;
	description: string;
	price: number;
	images: string[];

	itemType: string;
	quantity: number;
	imageUrl: string;
	rating: number;
	addOne(): void;
	removeOne(): void;
	getTotal(): number;
}

export class ShoppingItemClass implements ShoppingItem {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public price: number,
		public itemType: string,
		public quantity: number,
		public imageUrl: string,
		public images: string[],
		public rating: number
	) {}
	addOne() {
		this.quantity += 1;
	}
	removeOne() {
		if (this.quantity === 1) return;
		this.quantity -= 1;
	}
	getTotal(): number {
		return this.price * this.quantity;
	}
}
