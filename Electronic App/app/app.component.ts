import { NgModule }            from '@angular/core';
import { Component,Inject } from '@angular/core';
import { ProductService, Product } from './product.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app works!';
  products: Product[];
  constructor(private productService: ProductService, private router:Router){
       
  // setInterval(alert("working"),500);
     }
 
     ngOnInit(){
     
     }
}
