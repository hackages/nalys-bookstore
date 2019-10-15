import { BooksUrl, SearchByTitleUrl } from '../services/urls.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, startWith, tap, map } from 'rxjs/operators';
import { Book } from '../types/book';
@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(
    private http: HttpClient,
    @Inject(BooksUrl) private booksUrl: string,
    @Inject(SearchByTitleUrl) private searchByTitleUrl: string
  ) {}

  // Gets all the books from our mock server
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  search(term$: Observable<string>): Observable<Book[]> {
    return term$.pipe(
      startWith(''),
      switchMap(term => this.http.get<Book[]>(this.searchByTitleUrl + term)),
      map(data => <Book[]>data['books'])
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    return this.http
      .get<Book>(this.booksUrl + '/' + id)
      .pipe(map(data => <Book>data['book']));
  }

  // Update a book and re-fetch the list of books.
  update({ id, title }): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }
}
