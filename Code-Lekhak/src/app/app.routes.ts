import { Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { Error404Component } from './maintenance/error404/error404.component';

export const routes: Routes = [
    {path:'', component:IndexPageComponent, title:"Code_Lekhak - Quality Tutorials, Video Courses, and eBooks"},

    {
        path: 'company', loadChildren: () => import('./shared/company/company.module')
            .then(mod => mod.CompanyModule)
    },

    {

        path:'auth', loadChildren:() => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
    
    },

    {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
            .then(mod => mod.DashboardModule)
    },







    {path:'**', component:Error404Component}
];
