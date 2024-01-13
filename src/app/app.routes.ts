import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PlanComponent } from './views/plan/plan.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'plan/:id',
        component: PlanComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
