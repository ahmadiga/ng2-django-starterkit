import {
  Component
  style,
  trigger,
  state,
  animate,
  transition,
  query,
  HostBinding,
  keyframes
} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, Event as NavigationEvent} from '@angular/router';

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
    trigger('heroState', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('* => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(99%)', offset: 0}),
          style({opacity: 0, transform: 'translateX(1%)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))
      ]),
      transition('1 => 0', animate(1000, style({opacity: 0})))
    ])
  ]
  // providers: []
})
export class Layout {
  animation_flag = true;

  constructor(public router: Router) {

  }

  ngOnInit() {
    this.animation_flag = false;
    this.router.events.subscribe((event: any): void => {
      if (event instanceof NavigationEnd) {
        this.animation_flag = !this.animation_flag;
      }
    });
  }

}
