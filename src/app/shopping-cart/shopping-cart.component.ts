import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingCartItemComponent } from "../shopping-cart-item/shopping-cart-item.component";
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    imports: [CommonModule, ShoppingCartItemComponent],
    template: `
    <div class="cart-container">
        <div class="cart-content">
            <div class="cart-header">
                <h2>My Cart</h2>
                <button (click)="shoppingCartService.closeCart()">X</button>
            </div>

            <div class="items-list">
                <app-shopping-cart-item *ngFor="let item of shoppingCartService.itemList()" [item]="item"/>
            </div>

            <div class="cart-footer">
                <button>Checkout * {{shoppingCartService.totalValue()}} BRL</button>
            </div>
        </div>
    </div>
  `,
    styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

    constructor(public shoppingCartService: ShoppingCartService) {
    }
}
