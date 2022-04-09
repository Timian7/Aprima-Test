import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule, RouteDeclarations } from './dashboard-routing.module';

@NgModule({
  declarations: [
    RouteDeclarations
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
