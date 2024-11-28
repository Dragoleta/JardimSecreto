import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemCardComponent } from "../item-card/item-card.component";
import { ShoppingItem, ShoppingItemClass } from '../item-card/shopping-item';

@Component({
    selector: 'app-product-section',
    standalone: true,
    imports: [ItemCardComponent, CommonModule],
    template: `
    <div class="section-wrapper">
        <h2>Cosmeticos</h2>
        <div class="product-wrapper">
            <app-item-card *ngFor="let product of productList" [item]="product"/>
        </div>
    </div>
  `,
    styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {
    item: ShoppingItem = new ShoppingItemClass(0, 'teste', 'Muito sexo mesmo', 13, "cosmetico", 1, 'https://avibrio.com.br/cdn/shop/files/Design_sem_nome_-_2024-08-29T164746.308.png?v=1724960941&width=493', [], 5)

    productList: ShoppingItem[] = [this.item, this.item, this.item, this.item,];



}
