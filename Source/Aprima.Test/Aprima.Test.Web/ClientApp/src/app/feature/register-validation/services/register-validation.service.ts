import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class RegisterValidationService {

  static _config: Map<string, string>;

  constructor() { }

  static setValidationList(label: string, validatorValue?: any) {
    this._config = new Map<string, string>();

    this._config.set('required', `${label} is required.`);
    this._config.set('minlength', `Minimum length of ${validatorValue.requiredLength} characters.`);
    this._config.set('userNameExists', `That username already exists.`);
    this._config.set('invalidUserName', `Enter a valid username.`);
    this._config.set('invalidConfirmPassword', `Password does not match.`);
    this._config.set('invalidEmail', `Enter a valid email address.`);
    this._config.set('invalidConfirmEmail', `Email does not match.`);
  }

  static getValidatorErrorMessage(validatorName: string, label: string, validatorValue?: any): any {
    this.setValidationList(label, validatorValue);

    if (this._config) {
      return this._config.get(validatorName);
    };
  }

  static userNameValidator(control: FormControl) {
    let regUserName: RegExp = /^\w{3,30}$/;

    if (control.value == null) {
      return '';
    }

    if (!control.value.match(regUserName)) {
      return { 'invalidUserName': true };
    } else {
      return null;
    };
  }

  //static confirmPasswordValidator(control: FormControl) {
  //  if (control.parent == null) {
  //    return;
  //  }

  //  if (control.value == null) {
  //    return "";
  //  }

  //  const password: FormControl = control.parent.controls["password"];
  //  const confirmPassword: FormControl = control.parent.controls["confirmPassword"];

  //  if (!password && !confirmPassword) return null;

  //  if (confirmPassword.value !== password.value) {
  //    return { 'invalidConfirmPassword': true };
  //  } else {
  //    return null;
  //  }
  //}

  //static emailValidator(control: FormControl) {
  //  let regEmail: RegExp = EmailRegExp;

  //  if (control.value == null) {
  //    return '';
  //  };

  //  if (!control.value.match(regEmail)) {
  //    return { 'invalidEmail': true };
  //  } else {
  //    return null;
  //  };
  //}

  //static confirmEmailValidator(control: FormControl) {
  //  if (control.parent == null) {
  //    return;
  //  }

  //  if (control.value == null) {
  //    return "";
  //  }

  //  const email: FormControl = control.parent.controls["email"];
  //  const confirmEmail: FormControl = control.parent.controls["confirmEmail"];

  //  if (!email && !confirmEmail) return null;

  //  if (confirmEmail.value !== email.value) {
  //    return { 'invalidConfirmEmail': true };
  //  } else {
  //    return null;
  //  }
  //}
}
