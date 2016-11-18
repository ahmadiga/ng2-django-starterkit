/*
 * Angular 2 decorators and services
 */
import {
  Component, ViewEncapsulation,
  style,
  trigger,
  state,
  animate,
  transition,
} from '@angular/core';

import {AppState} from './app.service';
import {Router, NavigationStart, NavigationEnd, Event as NavigationEvent} from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `<div><layout></layout></div>`,
})
export class App {
  animation_flag = false;
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState, private slimLoadingBarService: SlimLoadingBarService, public router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event: any): void => {
      this.navigationInterceptor(event);
    });
    console.log('Initial App State', this.appState.state);
  }

  navigationInterceptor(event): void {
    console.log(event);
    if (event instanceof NavigationStart) {
      this.startLoading();
    }
    if (event instanceof NavigationEnd) {
      this.completeLoading();
    }
    // Additionally there's NavigationCancel and NavigationError
  }

  startLoading() {
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
