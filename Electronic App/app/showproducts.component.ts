import { NgModule }            from '@angular/core';
import { Component,Inject } from '@angular/core';
import { ProductService, Product } from './product.service';
import { Router} from '@angular/router';



@Component({
	selector: 'app-showproduct',
	templateUrl: './showproducts.component.html',
	styles : []
	})

export class ShowProductComponent{
 products : Product[];

 constructor(private productService:ProductService, private router:Router){

 }
  //Add Product Method
  addProduct(){
     	this.router.navigate(['/addProduct']);
     }

     ngOnInit(){
     	alert("Calling service");
     	this.productService.getProducts().then(products => {
        this.products = products;
      
    });
   }
}