import { Component } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    standalone: true,
    imports: [],
    template: `
    <div class="dropdown-container">
        <ul class="dropdown-menu">
            <li>
                <a href="">Page A</a>
                <ul>
                    <li><a href="">Page B</a></li>
                    <li><a href="">Page C</a></li>
                    <li><a href="">Page D</a></li>
                </ul>
            </li>
            <li>
                <a href="">Page A</a>

                <ul>
                    <li><a href="">Page B</a></li>
                    <li><a href="">Page C</a></li>
                    <li><a href="">Page D</a></li>
                </ul>
            </li>
                        <li>
                <a href="">Page A</a>

                <ul>
                    <li><a href="">Page B</a></li>
                    <li><a href="">Page C</a></li>
                    <li><a href="">Page D</a></li>
                </ul>
            </li>
                        <li>
                <a href="">Page A</a>

                <ul>
                    <li><a href="">Page B</a></li>
                    <li><a href="">Page C</a></li>
                    <li><a href="">Page D</a></li>
                </ul>
            </li>
        </ul>




    </div>
  `,
    styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {

}
