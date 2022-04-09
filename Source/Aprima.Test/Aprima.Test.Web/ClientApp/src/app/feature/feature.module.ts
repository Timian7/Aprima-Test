import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterFormModule } from './register-form/register-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterFormModule
  ],
  exports: [
    RegisterFormModule
  ]
})
export class FeatureModule { }
