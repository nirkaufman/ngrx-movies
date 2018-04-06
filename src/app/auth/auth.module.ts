import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './containers/auth.component';
import {RouterModule} from '@angular/router';
import { SignInComponent } from './components/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }])
  ],
  declarations: [AuthComponent, SignInComponent]
})
export class AuthModule { }
