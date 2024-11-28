import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [],
    template: `
    <section class="hero">
        <a href="" >
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.fotocommunity.com%2Fsunset21000px-35b48943-5e98-4cb5-a1dd-20e314e44733.jpg%3Fheight%3D1080&f=1&nofb=1&ipt=30eb3925ae835e1013a73291779f7baf2abc7e4071130de9725808d4b4341b32&ipo=images" alt="">
        </a>
        <!-- <div class="hero-text">
            <h1>It's your pleasure, It's time to explore it!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque culpa dolores nisi iste molestias voluptatibus iure itaque praesentium natus consequuntur blanditiis sapiente, quia nesciunt illum. Perferendis non culpa maxime?</p>
        </div> -->

    </section>
  `,
    styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
