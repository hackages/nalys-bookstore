import { routes } from './auth.routing';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent]
})
export class AuthModule {}
