import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import {CommonModule}       from '@angular/common';

/*
 * Platform and Environment providers/directives/pipes
 */
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ENV_PROVIDERS} from "../environment";
import {ROUTES} from "../app.routes";
import {Login} from "./login/login.component";

@NgModule({
  exports: [Login],
  declarations: [Login],
  imports: [ // import Angular's modules
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS
  ]
})
export class LoginModule {

}

