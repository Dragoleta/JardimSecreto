import { Component, Input } from '@angular/core';
import { ShoppingItem } from '../item-card/shopping-item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
    selector: 'app-shopping-cart-item',
    standalone: true,
    imports: [],
    template: `
    <div class="item">
        <img src="{{item?.imageUrl}}" alt="">
        <div class="item-contents">
           <div class="item-name-button">
                <h2>{{item?.name}}</h2>
                <img id="delete-icon" src="assets/trash-bin-minimalistic-svgrepo-com.svg" alt="Delete Item" (click)="shoppingCartService.removeItem(item!)">
           </div>
            <div class="item-info">
                <div class="item-quantity">
                    <div class="arrow-icon" (click)="item?.removeOne()">
                        <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.867 511.867" xml:space="preserve" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.827,350.027L263.493,104.373c-4.267-4.053-10.88-4.053-15.147,0L3.12,350.027c-4.16,4.16-4.16,10.88,0,15.04 l42.24,42.347c4.267,4.053,10.88,4.053,15.147,0L255.92,211.68l195.52,195.733c4.16,4.16,10.88,4.16,15.04,0l42.347-42.347 C512.88,360.907,512.88,354.187,508.827,350.027z M459.013,384.8l-195.52-195.733c-4.16-4.16-10.88-4.16-15.04,0L52.933,384.8 l-27.2-27.307L255.92,126.987l230.293,230.507L459.013,384.8z"></path> </g> </g> </g></svg>
                    </div>
                    <h3> {{item?.quantity}} </h3>
                    <div class="arrow-icon"  (click)="item?.addOne()">
                         <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.867 511.867" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.827,350.027L263.493,104.373c-4.267-4.053-10.88-4.053-15.147,0L3.12,350.027c-4.16,4.16-4.16,10.88,0,15.04 l42.24,42.347c4.267,4.053,10.88,4.053,15.147,0L255.92,211.68l195.52,195.733c4.16,4.16,10.88,4.16,15.04,0l42.347-42.347 C512.88,360.907,512.88,354.187,508.827,350.027z M459.013,384.8l-195.52-195.733c-4.16-4.16-10.88-4.16-15.04,0L52.933,384.8 l-27.2-27.307L255.92,126.987l230.293,230.507L459.013,384.8z"></path> </g> </g> </g></svg>
                    </div>
                </div>

                <h4>{{item?.getTotal()}} BRL</h4>
            </div>
        </div>
    </div>
  `,
    styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {
    @Input() item?: ShoppingItem;
    constructor(public shoppingCartService: ShoppingCartService) { }
}
