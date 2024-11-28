import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, HeaderComponent, CommonModule, ShoppingCartComponent],
    providers: [ShoppingCartService],
    template: `
    <main>
        <app-header/>
        <section class="content">
            <router-outlet/>
        </section>
        <div *ngIf="shoppingCartService.showCart()" >
                <app-shopping-cart/>
        </div>
    </main>
  `,
    styleUrl: './app.component.css'
})

export class AppComponent {


    constructor(
        public shoppingCartService: ShoppingCartService
    ) { }

}
