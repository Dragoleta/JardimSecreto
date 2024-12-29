import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ImgCarrousselComponent } from "../../components/img-carroussel/img-carroussel.component";
import { ShoppingItem } from "../../components/item-card/shopping-item";
import { ProductService } from "../../services/product/product.service";
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service";

@Component({
	selector: "app-details-page",
	standalone: true,
	imports: [CommonModule, ImgCarrousselComponent],
	template: `
		<div class="product-details-wrapper">
			<div class="main-info-wrapper">
				<app-img-carroussel [imgs]="product!.images" />

				<div class="info-desc-wrapper">
					<div class="product-info">
						<p id="product-name">{{ product!.name }}</p>
						<p id="product-price">{{ product!.price }} BRL</p>
						<button (click)="cartService.addItem(product!)">
							Comprar
						</button>
					</div>

					<div class="product-desc">{{ product!.description }}</div>
				</div>
			</div>

			<!-- <div class="secondary-info-wrapper">
				<div class="product-specs-wrapper">PLACE</div>

				<div class="bundle-wrapper">BUNDLE</div>
			</div> -->
		</div>
	`,
	styleUrl: "./details-page.component.css",
})
export class DetailsPageComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	productId: number = 0;
	product?: ShoppingItem;

	constructor(
		public productService: ProductService,
		public cartService: ShoppingCartService
	) {
		this.productId = Number(this.route.snapshot.params["id"]);
		this.product = productService.getProductById(this.productId);
	}
}
