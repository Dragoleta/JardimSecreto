import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductSectionComponent } from "../product-section/product-section.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [CommonModule, ProductSectionComponent],
    template: `
        <app-product-section/>
        <app-product-section/>
        <app-product-section/>
  `,
    styleUrl: './homepage.component.css'
})
export class HomepageComponent {
}
