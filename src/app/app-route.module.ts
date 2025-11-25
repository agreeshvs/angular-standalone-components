import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";

const  routes: Routes = [
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

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule{}