import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../../core/services/register.service';
import { RegisterValidationService } from '../../../register-validation/services/register-validation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, OnDestroy {
  validationError: string;

  registrationForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _registerService: RegisterService,
    private _renderer: Renderer2) {

  }

  ngOnInit() {
    this.initRegistrationForm();
    //this.initAutoFocus();
  }

  ngOnDestroy() { }

  //initAutoFocus() {
  //  let usernameInput = this._renderer.selectRootElement('#username');

  //  setTimeout(() => {
  //    usernameInput.focus();
  //  }, 50)
  //}

  initRegistrationForm() {
    this.registrationForm = this._fb.group({
      userName: ["", [
        Validators.required,
        Validators.minLength(5),
        RegisterValidationService.userNameValidator,
      ]],
      //password: ["", [
      //  Validators.required,
      //  Validators.minLength(8)
      //]],
      //confirmPassword: ["", [
      //  Validators.required,
      //  //RegisterValidationService.confirmPasswordValidator,
      //]],
      //email: ["", [
      //  Validators.required,
      //  //RegisterValidationService.emailValidator,
      //]],
      //confirmEmail: ["", [
      //  Validators.required,
      //  //RegisterValidationService.confirmEmailValidator,
      //]]
    })
  }

  onSubmit(something: any) {
    console.log(something);
  }
}
