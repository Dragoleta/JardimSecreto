import { Injectable, signal, WritableSignal } from "@angular/core";
import { ShoppingItem } from "../../components/item-card/shopping-item";

@Injectable({
	providedIn: "root",
})
export class ShoppingCartService {
	showCart = signal(false);
	itemList: WritableSignal<ShoppingItem[]> = signal([]);

	totalValue = signal(0);

	constructor() {}

	addItem(item: ShoppingItem) {
		this.itemList.update((values) => {
			if (values.some((existingItem) => existingItem.id === item.id)) {
				item.addOne();
				return values;
			}

			return [...values, item];
		});
		this.totalValue.update((a) => a + item.price);
	}

	removeOneItem(item: ShoppingItem) {
		if (1 >= item.quantity) {
			return;
		}
		item.removeOne();
		this.totalValue.update((a) => a - item.price);
	}

	removeItem(item: ShoppingItem) {
		this.totalValue.update((a) => a - item.getTotal());
		item.quantity = 1;
		this.itemList.update((values) =>
			values.filter((i) => i.id !== item.id)
		);
	}

	displayCart() {
		this.showCart.set(true);
	}

	closeCart() {
		this.showCart.set(false);
	}
}
