//import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Jsonp} from '@angular/http';
//import { Product } from './product';
export class Product {
  constructor(public productName:string, public companyName: string, public price: number,
  	public quantity: number) { }
}

const Products: Product[] = [
  new Product("Television", "Samsung",500,5),
  new Product("Fridge","LG", 650, 3),
  new Product("Washing Machine","Samsung",532,2),
  new Product("Home Theatre","Sony",120,2)
];


@Injectable()

export class ProductService {
	message = "Invoking service";
	private apiUrl: string;
	//public Products: Product[];
	private headers: Headers;
	getProducts(): Promise<Product[]>{
		  
         /* return this._jsonp.get(this.apiUrl) .toPromise()
               .then(response => response.json().data as Product[]);*/
      return new Promise<Product[]>(resolve => {
       resolve(Products);
    });
	}

	addProducts(product){
		
		Products.push(new Product(product[0],product[1],product[2],product[3]));
    };
	


	constructor(private http: Http, private _jsonp: Jsonp){
		//alert("service constructor");
		this.apiUrl = "http://jsoneditoronline.org/?id=0abfaa09f2557e50a08b6131ef1ec23c/callback=JSONP_CALLBACK";
		this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
	}
}