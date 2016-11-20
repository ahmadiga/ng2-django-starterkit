import {
  Component
  style,
  trigger,
  state,
  animate,
  transition,
  query,
  HostBinding,
  keyframes,
  ngOnInit
} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'layout',  // <layout></layout>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./layout.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './layout.component.html',
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('* => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(99%)', offset: 0}),
          style({opacity: 0, transform: 'translateX(1%)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))
      ])
    ])
  ]
  // providers: []
})
export class Layout implements ngOnInit {
  animationFlag = true;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.animationFlag = false;
    this.router.events.subscribe((event: any): void => {
      if (event instanceof NavigationEnd) {
        this.animationFlag = !this.animationFlag;
      }
    });
  }
}
