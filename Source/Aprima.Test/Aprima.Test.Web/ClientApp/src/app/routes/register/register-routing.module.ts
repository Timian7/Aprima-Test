import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Route[] = [
  {
    path: '',
    component: RegisterComponent
  }
];

export const RouteDeclarations = [
  RegisterComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
