import { AuthGuard } from './services/auth.guard';
import { Routes } from '@angular/router';
import { BookResolver } from './services/book.resover';
import {
  DashboardComponent,
  BookDetailComponent,
  LoginComponent
} from './components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'books/:id',
    component: BookDetailComponent,
    resolve: {
      book: BookResolver
    },
    canActivate: [AuthGuard]
  }
];