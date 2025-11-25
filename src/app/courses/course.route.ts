import { Route } from '@angular/router';
import { CoursesComponent } from './courses.component';

export const courses_routes: Route[] = [
    { path: '', component: CoursesComponent},
    { path: 'featured', loadComponent: () => import('./featured/featured.component')
                            .then(comp => comp.FeaturedComponent)
    }
]