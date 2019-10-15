import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  constructor() {}
  placeholder = 'what are you searching for...';
  @Input()
  termEmitter;
}
