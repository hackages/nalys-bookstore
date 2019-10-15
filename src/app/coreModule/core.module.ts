import { AuthModule } from './../authModule/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../sharedModule/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShellComponent } from './components/shell/shell.component';
import { routes } from './core.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent, DashboardComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  bootstrap: [ShellComponent]
})
export class CoreModule {}
