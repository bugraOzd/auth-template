/* ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* COMPONENTS */
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
/* INTERNAL MODULES */
import { ComponentsModule } from '../components/components.module';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginPageComponent,
    SignupPageComponent
  ]
})
export class PagesModule { }
