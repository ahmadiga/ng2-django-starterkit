import {Component} from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'footer',  // <layout></layout>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./footer.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './footer.component.html',
  // directives: []
})
export class Footer {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

}
