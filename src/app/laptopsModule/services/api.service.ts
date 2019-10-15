import { InMemoryDbService } from 'angular-in-memory-web-api';
import { computers } from '../mocks/laptops';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      computers
    };
  }
}
