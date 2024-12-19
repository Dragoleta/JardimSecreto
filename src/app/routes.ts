import { Routes } from "@angular/router";
import { DetailsPageComponent } from "./pages/details-page/details-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";

const routeConfig: Routes = [
	{
		path: "",
		component: HomepageComponent,
		title: "Home Page",
	},
	{
		path: "item/:id",
		component: DetailsPageComponent,
		title: "Item Page",
	},
];

export default routeConfig;
