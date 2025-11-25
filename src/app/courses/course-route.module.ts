import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { FeaturedComponent } from "./featured/featured.component";
const routes: Routes = [
    { path: '', component: CoursesComponent},
    { path: 'featured', component: FeaturedComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRouteModule{}