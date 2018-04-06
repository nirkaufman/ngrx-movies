import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app.component';
import { NavbarComponent } from './components/navbar.component';
import { PageLayoutComponent } from './components/page-layout.component';
import { AppFooterComponent } from './components/app-footer.component';
import {RouterModule} from '@angular/router';
import { LoaderComponent } from './components/loader.component';
import { SnackbarComponent } from './components/snackbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppComponent, NavbarComponent, PageLayoutComponent, AppFooterComponent, LoaderComponent, SnackbarComponent],
  exports: [AppComponent]
})
export class CoreModule { }
