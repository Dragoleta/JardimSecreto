import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingItem } from './shopping-item';

@Component({
    selector: 'app-item-card',
    standalone: true,
    imports: [],
    template: `
    <div class="card-wrapper">
        <img src="{{item.imageUrl}}" alt="">

        <div class="card-info">
            <h2>{{item.name}}</h2>
            <p>R$ {{item.price}}</p>
            <button (click)="shoppingCartService.addItem(item)">Buy</button>
        </div>
    </div>
  `,
    styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
    @Input() item!: ShoppingItem;
    constructor(public shoppingCartService: ShoppingCartService) {
        console.log(this.item)

    }
}
