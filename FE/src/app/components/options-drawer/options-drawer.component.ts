import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	selector: "app-options-drawer",
	imports: [CommonModule],
	standalone: true,
	template: `
		<div class="drawer-wrapper" *ngIf="isDrawerOpen">
			<div>
				<ul class="drawer-options">
					<li *ngFor="let item of options" class="drawer-items">
						<a href=""> {{ item }}</a>
					</li>
				</ul>
			</div>

			<!-- TODO: Make this the actual icons -->
			<div class="medias">
				<ul>
					<li *ngFor="let i of options">
						<img src="assets/bag.svg" alt="asd" />
					</li>
				</ul>
			</div>
		</div>
	`,
	styleUrl: "./options-drawer.component.css",
})
export class OptionsDrawerComponent {
	@Input() isDrawerOpen: boolean = false;
	@Input() options: String[] = [];
}
