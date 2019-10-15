import { Observable } from 'rxjs';
import { BookService } from './books.service';
import { Book } from '../types/book';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookResolver implements Resolve<Book> {
  constructor(private bs: BookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book> {
    return this.bs.getBook(route.params.id);
  }
}
