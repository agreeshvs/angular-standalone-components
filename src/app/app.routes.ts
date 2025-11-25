import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Route[] = [
    {path: '', component: HomeComponent},
        { path: 'about', 
            loadComponent:() => import('./about/about.component')
                            .then(comp => comp.AboutComponent)
        },
        { 
            path: 'courses', 
            loadChildren: () => import('./courses/course.route')
                                    .then( mod => mod.courses_routes)
        }
]