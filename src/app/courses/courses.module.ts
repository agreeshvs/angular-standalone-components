import { NgModule } from "@angular/core";
import { CoursesComponent } from "./courses.component";
import { CoursesRouteModule } from "./course-route.module";

@NgModule({
    imports: [CoursesRouteModule],
    declarations: [CoursesComponent]
})
export class CoursesModule{

}