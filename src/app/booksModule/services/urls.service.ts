import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = new InjectionToken('SearchByTitleUrl', {
  providedIn: 'root',
  factory: () => 'https://52826f1a.ngrok.io/books/?title='
});

export const BooksUrl = new InjectionToken('booksUrl', {
  providedIn: 'root',
  factory: () => 'https://52826f1a.ngrok.io/books'
});

export const BookUrl = new InjectionToken('bookUrl', {
  providedIn: 'root',
  factory: () => 'https://52826f1a.ngrok.io/books/:bookID'
});
