import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";

const  routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { 
        path: 'courses', 
        loadChildren: () => import('./courses/courses.module')
                                .then( mod => mod.CoursesModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule{}