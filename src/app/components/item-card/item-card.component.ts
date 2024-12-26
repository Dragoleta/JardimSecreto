import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service";
import { ShoppingItem } from "./shopping-item";

@Component({
	selector: "app-item-card",
	standalone: true,
	imports: [RouterModule],
	template: `
		<div class="card-wrapper">
			<a [routerLink]="['/item', item.id]">
				<img src="{{ item.imageUrl }}" alt="" />

				<div class="card-info">
					<div class="item-info">
						<h2>{{ item.name }}</h2>
						<p>R$ {{ item.price }}</p>
					</div>
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
