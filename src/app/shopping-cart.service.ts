import { computed, Injectable, signal, WritableSignal } from "@angular/core";
import { ShoppingItem } from "./item-card/shopping-item";

@Injectable({
	providedIn: "root",
})
export class ShoppingCartService {
	showCart = signal(false);
	itemList: WritableSignal<ShoppingItem[]> = signal([]);

	totalValue = computed(() => {
		if (this.itemList().length === 0) return 0.0;
		return this.itemList().reduce((sum, item) => sum + item.price, 0);
	});

	constructor() {}

	addItem(item: ShoppingItem) {
		console.log("adding");
		this.itemList.update((values) => {
			if (values.some((existingItem) => existingItem.id === item.id)) {
				item.addOne();
				return values;
			}
			return [...values, item];
		});
	}

	removeItem(item: ShoppingItem) {
		item.quantity = 0;
		this.itemList.update((values) =>
			values.filter((i) => i.id !== item.id)
		);
	}

	displayCart() {
		this.showCart.set(true);
		console.log(this.showCart());
	}

	closeCart() {
		this.showCart.set(false);
	}
}
