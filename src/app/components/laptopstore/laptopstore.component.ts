import { LaptopService } from './../../services/laptop.service';
import { Computer } from './../../../types/computer';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'bs-laptopstore',
  templateUrl: './laptopstore.component.html'
})
export class LaptopstoreComponent implements OnInit {
  laptops$: Observable<Computer[]> = of([]);
  termEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private lp: LaptopService) {}

  ngOnInit(): void {
    this.laptops$ = this.lp.search(this.termEmitter.asObservable());
  }
}
