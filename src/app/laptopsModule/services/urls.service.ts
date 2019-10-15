import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = new InjectionToken('SearchByTitleUrl', {
  providedIn: 'root',
  factory: () => 'http://localhost:5000/books/?title='
});

export const BooksUrl = new InjectionToken('bookUrl', {
  providedIn: 'root',
  factory: () => 'api/books'
});

export const SearchByNameUrl = new InjectionToken('SearchByNameUrl', {
  providedIn: 'root',
  factory: () => 'http://localhost:5000/computers/?name='
});

export const ComputersUrl = new InjectionToken('computerUrl', {
  providedIn: 'root',
  factory: () => 'api/computers'
});
