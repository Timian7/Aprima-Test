import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    RegisterService
  ]
})
export class CoreModule { }
