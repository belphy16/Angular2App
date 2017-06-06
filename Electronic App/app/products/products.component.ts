import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService,Product } from '../product.service';


@Component({
  selector: 'app-products',
  template: `
    <h2 style="text-align:center">Add Product</h2>
    <div class="form">
    <form (ngSubmit)="addProduct(productId.value,companyId.value,price.value,no.value)" #productForm="ngForm">
    <label for="productName">Product Name</label>
    <input #productId type="text" class="form-control"  >

     <label for="companyName">Company Name</label>
    <input #companyId type="text" class="form-control"  >

     <label for="price">Price</label>
    <input #price type="number" class="form-control" >

     <label for="quantity">Quantity</label>
    <input #no type="number" class="form-control" >
    

    <button type="submit" class="buttonClass btn btn-success" [disabled]="!productForm.form.valid">Add</button>
    
     </form>
    <button type="submit" class="buttonClass btn btn-default" (click)="back()" [disabled]="!productForm.form.valid">View Products</button>
      </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
 // product: Product;
  constructor(
    private router:Router,
    private productService: ProductService) { }

  ngOnInit() {
   
  }
  addProduct(product,company,price,quan){
    alert("Products Saved successfully");
    let products=[];
    products.push(product);
    products.push(company);
    products.push(price);
    products.push(quan);
    this.productService.addProducts(products);

    //alert(this.product);

  }
  back(){
    
    this.router.navigate(["/showproducts"])

  }
  onclick(value){
    alert(value);
  }

}
