import { AuthGuard } from './modules/AuthModule/services/auth.guard';
import { Routes } from '@angular/router';
import { BookResolver } from './services/book.resover';
import {
  DashboardComponent,
  BookDetailComponent,
  LaptopstoreComponent,
  BookstoreComponent
} from './components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
    // canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: 'src/app/modules/AuthModule/auth.module#AuthModule'
  },
  {
    path: 'books',
    component: BookstoreComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'laptops',
    component: LaptopstoreComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'books/:id',
    component: BookDetailComponent,
    resolve: {
      book: BookResolver
    }
    // canActivate: [AuthGuard]
  }
];
