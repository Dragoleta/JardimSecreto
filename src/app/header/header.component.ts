import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    template: `
        <header class="header">
            <img src="assets/logo.svg" alt="My Logo" class="logo" aria-hidden="true">

            <ul class="header-list">
                <li class="header-options">Cosmeticos</li>
                <li class="header-options">Acessorios</li>
                <li class="header-options">Vibradores</li>
                <li class="header-options">Mais vendidos</li>

                <li class="header-options">
                    <img src="assets/user.svg" alt="Search Button" class="nav-icon">
                </li>
                <li class="header-options" (click)="openCart()">
                    <img src="assets/bag.svg" alt="Search Button" class="nav-icon">
                </li>
            </ul>

        </header>
  `,
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    constructor(private shoppingCartService: ShoppingCartService) { }

    openCart() {
        this.shoppingCartService.displayCart();
    }
}
