import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: "Home Page"
    },
];

export default routeConfig;
