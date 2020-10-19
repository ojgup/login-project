import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginSuccessfulComponent} from 'src/app/login-successful/login-successful.component'
import {LoginComponent} from 'src/app/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login-successful', component: LoginSuccessfulComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
