import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterRoutingModule, RouteDeclarations } from './register-routing.module';
import { FeatureModule } from 'src/app/feature/feature.module';

@NgModule({
  declarations: [
    RouteDeclarations
  ],
  imports: [
    CommonModule,
    FeatureModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
