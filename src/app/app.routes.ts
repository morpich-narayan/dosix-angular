import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { ResetComponent } from './auth/pages/reset/reset.component';
import { PassChangeComponent } from './auth/pages/pass-change/pass-change.component';
import { LockscreenComponent } from './auth/pages/lockscreen/lockscreen.component';
import { LogoutComponent } from './auth/pages/logout/logout.component';
import { SuccessMsgComponent } from './auth/pages/success-msg/success-msg.component';
import { TwostepComponent } from './auth/pages/twostep/twostep.component';
import { PageNotFoundComponent } from './auth/pages/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './auth/pages/server-error/server-error.component';
import { ServiceNotFoundComponent } from './auth/pages/service-not-found/service-not-found.component';
import { OfflineComponent } from './auth/pages/offline/offline.component';

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
    {
        path: 'auth',
        component: AuthComponent,
        children:[
            { path: '', component: LoginComponent },
            { path: 'auth-signin', component: LoginComponent },
            { path: 'auth-signup', component: RegisterComponent },
            { path: 'auth-pass-reset', component: ResetComponent },
            { path: 'auth-pass-change', component: PassChangeComponent },
            // 
            { path: 'auth-lockscreen', component: LockscreenComponent },
            { path: 'auth-logout', component: LogoutComponent },
            { path: 'auth-success-msg', component: SuccessMsgComponent },
            { path: 'auth-twostep', component: TwostepComponent },
            { path: 'auth-404', component: PageNotFoundComponent },
            { path: 'auth-500', component: ServerErrorComponent },
            { path: 'auth-503', component: ServiceNotFoundComponent },
            { path: 'auth-offline', component: OfflineComponent },
        ]
    }

];
