import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = new InjectionToken('SearchByTitleUrl', {
  providedIn: 'root',
  factory: () => 'app/books/?title='
});

export const BooksUrl = new InjectionToken('bookUrl', {
  providedIn: 'root',
  factory: () => 'app/books'
});

// const MY_SERVICE_TOKEN = new InjectionToken<MyService>(
//   'Manually constructed MyService',
//   {
//     providedIn: 'root',
//     factory: () => new MyService(inject(MyDep))
//   }
// );
