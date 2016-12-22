import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-products',
  template: `
    <h2 style="text-align:center">Add Product</h2>
    <div class="form">
    <form (ngSubmit)="addProduct()" #productForm="ngForm">
    <label for="productName">Product Name</label>
    <input type="text" class="form-control"  (ngModel)="product.productName">

     <label for="companyName">Company Name</label>
    <input type="text" class="form-control"  (ngModel)="product.companyName">

     <label for="price">Price</label>
    <input type="text" class="form-control"  (ngModel)="product.price">

     <label for="quantity">Quantity</label>
    <input type="text" class="form-control"  (ngModel)="product.quantity">
    </form>

    <button type="submit" class="buttonClass btn btn-success" (click)="save()" [disabled]="!productForm.form.valid">Add</button>
    <button type="submit" class="btn btn-default" (click)="back()" [disabled]="!productForm.form.valid">Back</button>
      </div>
  `,
  styles: [
 ]
})
export class ProductsComponent implements OnInit {
  product
  constructor(
    private router:Router,
    private productService: ProductService) { }

  ngOnInit() {
  }
  save(){
    alert("save");
   

  }
  back(){
    alert("back");
    this.router.navigate(["/showproducts"])

  }
  onclick(value){
    alert(value);
  }

}
