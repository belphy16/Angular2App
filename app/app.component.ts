import { Component,Inject } from '@angular/core';
import { ProductService, Product } from './product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app works!';
  products: Product[];
  constructor(private productService: ProductService, @Inject('api') private api){
       
  // setInterval(alert("working"),500);
     }
 
     addProduct(){
     	alert("New Product");
     }

     ngOnInit(){
     	alert("Calling service");
     	this.productService.getProducts().then(products => {
      
      this.products = products;
      
    });
     }
}
