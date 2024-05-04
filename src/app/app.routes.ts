import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { authGuard } from './_service/auth.guard';
import { SliderComponent } from './component/slider/slider.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'customer', loadComponent: () => import('./component/cutomer/cutomer.component').then(m => m.CutomerComponent),
        canActivate: [authGuard]
    },
    {
        path: 'customer/add', loadComponent: () => import('./component/addcustomer/addcustomer.component').then(m => m.AddcustomerComponent),
        canActivate: [authGuard]
    },
    {
        path: 'customer/edit/:code', loadComponent: () => import('./component/addcustomer/addcustomer.component').then(m => m.AddcustomerComponent),
        canActivate: [authGuard]
    },
    {
        path:'slider',component:SliderComponent
    }
];
