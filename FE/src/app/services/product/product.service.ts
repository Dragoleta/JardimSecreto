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
		`Quantos minutos de felicidade você deseja para hoje?
O uso do Mini Vibrio simboliza uma mulher que é dona de sua sexualidade, que valoriza seu bem-estar e que busca o prazer de forma consciente, sem abrir mão do bom gosto e privacidade.`,
		13,
		"cosmetico",
		1,
		"https://avibrio.com.br/cdn/shop/files/Design_sem_nome_-_2024-08-29T164746.308.png?v=1724960941&width=493",
		[
			"https://avibrio.com.br/cdn/shop/files/Design_sem_nome_-_2024-08-29T164746.308.png?v=1724960941&width=493",
			"https://atacadaosexyshop.vtexassets.com/arquivos/ids/298703-1600-1600/Lubrificante_ntimo_Love_Lub_Ne_963.jpg?v=638545878483130000",
			"https://atacadaosexyshop.vtexassets.com/arquivos/ids/302585-1600-1600/Masturbador_Egg_Magical_Kiss_M_865.jpg?v=638600220999070000",
			"https://atacadaosexyshop.vtexassets.com/arquivos/ids/297647-570-570/Vibrador_Liquido_Power_Shock_2_32.png?v=638531193916400000",
		],
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
	];

	constructor() {}

	getProductList(): ShoppingItem[] {
		return this.productList;
	}

	getProductById(productId: number): ShoppingItem | undefined {
		return this.productList.find((product) => product.id === productId);
	}
}
