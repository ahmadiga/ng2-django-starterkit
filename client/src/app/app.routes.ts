import {Routes, RouterModule} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {NoContent} from './no-content';

import {DataResolver} from './app.resolver';
import {Login} from "./auth/login/login.component";


export const ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'login', component: Login},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  {path: '**', component: NoContent},
];
