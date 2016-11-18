import {Component} from '@angular/core';
import {MainMenu} from "../main-menu/mainMenu.component";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'header',  // <layout></layout>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./header.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './header.component.html'
})
export class Header {
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

}
