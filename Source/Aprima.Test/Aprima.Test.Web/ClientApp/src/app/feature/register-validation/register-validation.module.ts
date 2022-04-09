import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterControlMessagesComponent } from './components/register-control-messages/register-control-messages.component';
import { RegisterValidationService } from './services/register-validation.service';

@NgModule({
  declarations: [
    RegisterControlMessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RegisterControlMessagesComponent
  ],
  providers: [RegisterValidationService]
})
export class RegisterValidationModule { }
