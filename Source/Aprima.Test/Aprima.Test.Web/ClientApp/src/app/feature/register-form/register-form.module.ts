import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { RegisterValidationModule } from '../register-validation/register-validation.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RegisterValidationModule
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterFormModule { }
