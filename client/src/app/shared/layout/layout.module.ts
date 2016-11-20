import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import {CommonModule}       from '@angular/common';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from '../../environment';
import {ROUTES} from '../../app.routes';
import {Layout} from "./layout.component";
import {Header} from "./components/header/header.component";
import {Footer} from "./components/footer/footer.component";
import {MainMenu} from "./components/main-menu/mainMenu.component";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import {
  DropdownModule,
  AlertModule,
  ModalModule
} from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  exports: [Layout],
  declarations: [
    Layout,
    Header,
    Footer,
    MainMenu,
  ],
  imports: [ // import Angular's modules
    RouterModule.forRoot(ROUTES, {useHash: true}),
    SlimLoadingBarModule.forRoot(),
    DropdownModule,
    ModalModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS
  ]
})
export class LayoutModule {

}

