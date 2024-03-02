import { Routes } from '@angular/router';
import { CatsFactsComponent } from './cats-facts/cats-facts.component';
import { LoginComponent } from './login/login.component';

export const routesConfig: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login page',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page',
    },
    {
        path: 'facts',
        component: CatsFactsComponent,
        title: 'Cats facts',
    },
];
