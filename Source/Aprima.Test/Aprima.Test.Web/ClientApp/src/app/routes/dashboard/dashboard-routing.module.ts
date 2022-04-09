import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
      },
      {
        path: '**',
        redirectTo: 'register'
      }
    ]
  }
];

export const RouteDeclarations = [
  DashboardComponent,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
