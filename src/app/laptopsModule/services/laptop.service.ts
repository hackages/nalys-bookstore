import { Computer } from '../types/computer';
import { ComputersUrl, SearchByNameUrl } from './urls.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class LaptopService {
  constructor(
    private http: HttpClient,
    @Inject(ComputersUrl) private computersUrl: string,
    @Inject(SearchByNameUrl) private searchByNameUrl: string
  ) {}

  // Gets all the books from our mock server
  getLaptops(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.computersUrl);
  }

  search(name$: Observable<string>): Observable<Computer[]> {
    return name$.pipe(
      startWith(''),
      switchMap(name => this.http.get<Computer[]>(this.searchByNameUrl + name))
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Computer> {
    return this.http.get<Computer>(this.computersUrl + '/' + id);
  }
}
