import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {JsonpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ProductService,{provide:'api',useValue:"localhost:3030"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
