import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService,Product } from '../product.service';


@Component({
  selector: 'app-products',
  template: `
    <h2 style="text-align:center">Add Product</h2>
    <div class="form">
    <form (ngSubmit)="addProduct(proname)" #productForm="ngForm">
    <label for="productName">Product Name</label>
    <input type="text" class="form-control"  [(ngModel)]="proname">

     <label for="companyName">Company Name</label>
    <input type="text" class="form-control"  [(ngModel)]="product.companyName">

     <label for="price">Price</label>
    <input type="text" class="form-control"  [(ngModel)]="product.price">

     <label for="quantity">Quantity</label>
    <input type="text" class="form-control"  [(ngModel)]="product.quantity">
    

    <button type="submit" class="buttonClass btn btn-success" [disabled]="!productForm.form.valid">Add</button>
    
     </form>
    <button type="submit" class="btn btn-default" (click)="back()" [disabled]="!productForm.form.valid">Back</button>
      </div>
  `,
  styles: [
 ]
})
export class ProductsComponent implements OnInit {
 // product: Product;
  constructor(
    private router:Router,
    private productService: ProductService) { }

  ngOnInit() {
   
  }
  addProduct(value){
    alert("save");
    //alert(this.product);

  }
  back(){
    alert("back");
    this.router.navigate(["/showproducts"])

  }
  onclick(value){
    alert(value);
  }

}
