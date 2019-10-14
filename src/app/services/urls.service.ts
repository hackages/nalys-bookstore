import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = new InjectionToken('SearchByTitleUrl', {
  providedIn: 'root',
  factory: () => 'app/books/?title='
});

export const BooksUrl = new InjectionToken('bookUrl', {
  providedIn: 'root',
  factory: () => 'app/books'
});

export const SearchByNameUrl = new InjectionToken('SearchByNameUrl', {
  providedIn: 'root',
  factory: () => 'app/computers/?name='
});

export const ComputersUrl = new InjectionToken('computerUrl', {
  providedIn: 'root',
  factory: () => 'app/computers'
});
