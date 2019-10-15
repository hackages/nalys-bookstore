import { Routes } from '@angular/router';
import { BookstoreComponent, BookDetailComponent } from './components';
import { BookResolver } from './services/book.resover';
import { AuthGuard } from './../authModule/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: BookstoreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: BookDetailComponent,
    canActivate: [AuthGuard],
    resolve: {
      book: BookResolver
    }
  }
];
