import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ShoppingCartService } from "./services/shopping-cart/shopping-cart.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterModule,
		HeaderComponent,
		CommonModule,
		ShoppingCartComponent,
		FooterComponent,
	],
	providers: [ShoppingCartService],
	template: `
		<main>
			<app-header />
			<section class="content">
				<router-outlet />
			</section>
			<app-footer />
			<div *ngIf="shoppingCartService.showCart()">
				<app-shopping-cart />
			</div>
		</main>
	`,
	styleUrl: "./app.component.css",
})
export class AppComponent {
	constructor(public shoppingCartService: ShoppingCartService) {}
}
