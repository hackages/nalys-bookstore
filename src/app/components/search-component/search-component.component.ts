import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  constructor() {}

  placeholder = 'search books';
  value = 'what is your name';
  @Input()
  termEmitter;
}
