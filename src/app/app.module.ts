import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './core/containers/app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AuthModule} from './auth/auth.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
