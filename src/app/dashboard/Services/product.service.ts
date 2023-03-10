import { environment } from './../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  // create behavior subject////////////////////
  productsData = new BehaviorSubject({})

  // get all products///////////////////////////
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(environment.baseApi)
  };

  // get single product/////////////////////////
  getSingleProduct(id: number): Observable<any> {
    return this._HttpClient.get(environment.baseApi + '/' + id)
  };

  // Add New Product////////////////////////////
  addProduct(data: any): Observable<any> {
    return this._HttpClient.post(environment.baseApi + '/add', data)
  };

  // Delete Product////////////////////////////
  deleteProduct(id: number): Observable<any> {
    return this._HttpClient.delete(environment.baseApi + '/' + id)
  };

  // update product////////////////////////////
  updateProduct(id: number, data: any): Observable<any> {
    return this._HttpClient.put(environment.baseApi + '/' + id, data)

  };

  // create function get all products from behavior subject (request)////////////////
  getProductsData() {
    this.getAllProducts().subscribe(res => {
      this.productsData.next({
        allProducts: res.products,
        totalProducts: res.products.length
      })
    })
  };
}
