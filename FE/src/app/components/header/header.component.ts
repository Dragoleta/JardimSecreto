import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service";
import { OptionsDrawerComponent } from "../options-drawer/options-drawer.component";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [CommonModule, OptionsDrawerComponent],
	template: `
		<!-- TODO: Add header media query and dropdown menu when little -->
		<header class="header">
			<img
				src="assets/logo.svg"
				alt="My Logo"
				class="logo"
				aria-hidden="true"
			/>

			<ul class="header-list">
				<div *ngIf="getScreenWidth > 900" class="header-list">
					<li class="header-options" *ngFor="let item of options">
						<p>{{ item }}</p>
					</li>
				</div>

				<li class="header-options" *ngIf="getScreenWidth > 900">
					<img
						src="assets/user.svg"
						alt="User Button"
						class="nav-icon"
					/>
				</li>

				<li class="header-options" (click)="openCart()">
					<img
						src="assets/bag.svg"
						alt="Cart Button"
						class="nav-icon"
					/>
				</li>

				<li
					class="header-options"
					(click)="toggleDrawer()"
					*ngIf="getScreenWidth <= 900"
				>
					<img
						src="assets/drawer.svg"
						alt="Drawer Button"
						class="nav-icon"
					/>
				</li>
			</ul>
		</header>
		<app-options-drawer [isDrawerOpen]="isDrawerOpen" [options]="options" />
	`,
	styleUrl: "./header.component.css",
})
export class HeaderComponent {
	public getScreenWidth: any;
	public isDrawerOpen: boolean = false;

	// TODO: Change to be dict with name and url
	public options: String[] = [
		"Cosmeticos",
		"Acessorios",
		"Vibradores",
		"Mais vendidos",
	];

	constructor(private shoppingCartService: ShoppingCartService) {}

	ngOnInit() {
		this.getScreenWidth = window.innerWidth;
	}

	@HostListener("window:resize", ["$event"])
	onWindowResize() {
		this.getScreenWidth = window.innerWidth;
	}

	openCart() {
		if (this.isDrawerOpen) this.toggleDrawer();
		this.shoppingCartService.displayCart();
	}

	toggleDrawer() {
		this.isDrawerOpen = !this.isDrawerOpen;
	}
}
