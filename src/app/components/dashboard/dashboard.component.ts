import { BookService } from './../../services/books.service';
import { Book } from './../../../types/book';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'bs-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  books$: Observable<Book[]> = of([]);
  termEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bs.search(this.termEmitter.asObservable());
  }
}
