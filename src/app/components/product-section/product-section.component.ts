import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { ItemCardComponent } from "../item-card/item-card.component";
import { ShoppingItem } from "../item-card/shopping-item";

@Component({
	selector: "app-product-section",
	standalone: true,
	imports: [ItemCardComponent, CommonModule],
	template: `
		<div class="section-wrapper">
			<h2>Cosmeticos</h2>
			<div class="product-wrapper">
				<app-item-card
					*ngFor="let product of productList"
					[item]="product"
				/>
			</div>
		</div>
	`,
	styleUrl: "./product-section.component.css",
})
export class ProductSectionComponent {
	productList: ShoppingItem[] = [];

	constructor(public productService: ProductService) {
		this.productList = productService.getProductList();
	}
}
