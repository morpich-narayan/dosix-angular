import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
    },
    {
        path: 'pages',
        component: LayoutsComponent,
        loadChildren: () =>
            import('./layouts/layout.route').then((mod) => mod.PAGE_ROUTES),
    },
];
