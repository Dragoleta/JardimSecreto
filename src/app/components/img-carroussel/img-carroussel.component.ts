import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	selector: "app-img-carroussel",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="img-wrapper">
			<img [src]="imgs![index]" alt="" />
		</div>
		<div class="button-wrapper">
			<button (click)="prev()"><</button>
			<p>{{ index + 1 }} / {{ imgs?.length }}</p>
			<button (click)="next()">></button>
		</div>
	`,

	styleUrl: "./img-carroussel.component.css",
})
export class ImgCarrousselComponent {
	@Input() imgs?: String[];
	public index = 0;

	next() {
		if (this.imgs!.length - 1 === this.index) {
			return;
		}
		this.index += 1;
	}

	prev() {
		if (0 === this.index) {
			return;
		}
		this.index -= 1;
	}
}
