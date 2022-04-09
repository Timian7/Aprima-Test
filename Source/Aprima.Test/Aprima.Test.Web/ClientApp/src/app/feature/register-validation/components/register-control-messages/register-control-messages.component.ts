import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RegisterValidationService } from '../../services/register-validation.service';

@Component({
  selector: 'app-register-control-messages',
  templateUrl: './register-control-messages.component.html',
  styleUrls: ['./register-control-messages.component.css']
})
export class RegisterControlMessagesComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit() { }

  get errorMessage() {
    if (this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) &&
          (this.control.touched && this.control.invalid)) {
          return RegisterValidationService.getValidatorErrorMessage(propertyName, this.label, this.control.errors[propertyName]);
        }
      }
    }

    return null;
  }
}
