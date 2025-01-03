import { Component } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [],
	template: `
		<div class="footer-wrapper">
			<div class="wrapper">
				<div class="contacts">
					<h2>Contatos</h2>
					<p>Whatsapp</p>
					<p>Email</p>
					<p>Telefone</p>
				</div>
				<div class="info">
					<h2>Info</h2>
					<p>Quem somos</p>
					<p>Entregas</p>
					<p>filler</p>
					<p>filler</p>
				</div>
			</div>
			<div class="socials">
				<img
					src="assets/instagram-outline-svgrepo-com.svg"
					alt="insta"
					style="width: 40px;"
				/>
				<img
					src="assets/spotify-outline-svgrepo-com.svg"
					alt="spotify"
					style="width: 40px;"
				/>
				<img
					src="assets/instagram-outline-svgrepo-com.svg"
					alt="insta"
					style="width: 40px;"
				/>
				<img
					src="assets/spotify-outline-svgrepo-com.svg"
					alt="spotify"
					style="width: 40px;"
				/>
			</div>
		</div>
	`,
	styleUrl: "./footer.component.css",
})
export class FooterComponent {}
