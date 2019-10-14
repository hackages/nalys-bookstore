import { Computer } from './../../../types/computer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  @Input('laptops') items: Computer[];

  ngOnInit() {}
}
