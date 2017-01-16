import {Routes, RouterModule} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {NoContent} from './no-content';

import {DataResolver} from './app.resolver';
import {Login} from "./auth/components/login/login.component";
import {Register} from "./auth/components/register/register.component";


export const ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'register', component: Register},
  {path: 'login', component: Login},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  {path: '**', component: NoContent},
];
