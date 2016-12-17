import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div><input [(ngModel)]="value"  type="text">
    <button (click)="onclick(value)">Click</button>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onclick(value){
    alert(value);
  }

}
