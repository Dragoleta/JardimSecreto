import { Component, Input } from "@angular/core";
import { ShoppingCartService } from "../shopping-cart.service";
import { ShoppingItem } from "./shopping-item";

@Component({
	selector: "app-item-card",
	standalone: true,
	imports: [],
	template: `
		<div class="card-wrapper">
			<a (click)="shoppingCartService.addItem(item!)">
				<!-- TODO: Change from intead of (A) adding, redir to the details page -->
				<img src="{{ item.imageUrl }}" alt="" />

				<div class="card-info">
					<div class="item-info">
						<h2>{{ item.name }}</h2>
						<p>R$ {{ item.price }}</p>
					</div>
					<!-- <button (click)="shoppingCartService.addItem(item)">
						Buy
					</button> -->
				</div>
			</a>
		</div>
	`,
	styleUrl: "./item-card.component.css",
})
export class ItemCardComponent {
	@Input() item!: ShoppingItem;
	constructor(public shoppingCartService: ShoppingCartService) {}
}
