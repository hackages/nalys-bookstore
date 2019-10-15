import { InMemoryDbService } from 'angular-in-memory-web-api';
import { books } from '../mocks/books';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      books
    };
  }
}
