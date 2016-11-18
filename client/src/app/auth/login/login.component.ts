import {
  Component
} from '@angular/core';
import {
  FormGroup, FormControl, Validators, FormBuilder
}
  from '@angular/forms';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'login',  // <layout></layout>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./login.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html',
})
export class Login {
  form: FormGroup;
  // TypeScript public modifiers
  constructor(fb: FormBuilder,) {

    this.form = fb.group({
      "username": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  onSubmit() {
    console.log("model-based form submitted");
  }
}
