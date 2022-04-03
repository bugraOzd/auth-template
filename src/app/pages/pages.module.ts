/* ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/* MATERIAL */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';
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
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    ComponentsModule
  ],
  exports: [
    LoginPageComponent,
    SignupPageComponent
  ]
})
export class PagesModule { }
