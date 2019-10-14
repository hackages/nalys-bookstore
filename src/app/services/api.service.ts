import { InMemoryDbService } from 'angular-in-memory-web-api';
import { books, computers } from './../../mocks';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      books,
      computers
    };
  }
}
