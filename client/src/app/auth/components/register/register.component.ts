import {
  Component
} from '@angular/core';
import {
  FormGroup, FormControl, Validators, FormBuilder
}
  from '@angular/forms';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'register',  // <layout></layout>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./register.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './register.component.html'
})
export class Register {
  errors;
  // TypeScript public modifiers
  constructor(fb: FormBuilder, private userService: UserService) {
    this.newUser = new User();
  }

  onSubmit() {
    this.errors = this.userService.createUsers(this.newUser)
      .catch(this.handleError);
    console.log("model-based form submitted");
  }

  handleError(error: any) {
    return error._body;
  }
}
