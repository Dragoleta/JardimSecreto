import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShoppingItem } from "../../components/item-card/shopping-item";
import { ProductService } from "../../services/product/product.service";

@Component({
	selector: "app-details-page",
	standalone: true,
	imports: [CommonModule],
	template: ` <p>details-page works! {{ product! }}</p> `,
	styleUrl: "./details-page.component.css",
})
export class DetailsPageComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	productId: number = 0;
	product?: ShoppingItem;

	constructor(public productService: ProductService) {
		this.productId = Number(this.route.snapshot.params["id"]);
		this.product = productService.getProductById(this.productId);
	}
}
