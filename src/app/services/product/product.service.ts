import { Injectable } from "@angular/core";
import {
	ShoppingItem,
	ShoppingItemClass,
} from "../../components/item-card/shopping-item";

@Injectable({
	providedIn: "root",
})
export class ProductService {
	item: ShoppingItem = new ShoppingItemClass(
		0,
		"Teste",
		"Muito sexo mesmo",
		13,
		"cosmetico",
		1,
		"https://avibrio.com.br/cdn/shop/files/Design_sem_nome_-_2024-08-29T164746.308.png?v=1724960941&width=493",
		[],
		5
	);

	productList: ShoppingItem[] = [
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
		this.item,
	];

	constructor() {}

	getProductList(): ShoppingItem[] {
		return this.productList;
	}

	getProductById(productId: number): ShoppingItem | undefined {
		return this.productList.find((product) => product.id === productId);
	}
}
