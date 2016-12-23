import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {JsonpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ShowProductComponent } from './showproducts.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';


//Added for Routing

const appRoutes: Routes = [
 { path: '', redirectTo: '/showproducts', pathMatch: 'full' },
 { path: 'showproducts',  component: ShowProductComponent },
  { path: 'addProduct', component: ProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    HttpModule,
    JsonpModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,{provide:'api',useValue:"localhost:3030"}],
  bootstrap: [AppComponent]
})

export class AppModule { }
