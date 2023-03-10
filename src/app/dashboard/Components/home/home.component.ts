import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // variables init///////////////
  allProducts: any[] = [];
  productId: any
  // /////////////////////////////
  constructor(private _ProductService: ProductService) {}

  ngOnInit(): void {
    this.getProductsData();
    this.getAllProducts();
  }

  // call behavior subject request/////////////////
  getProductsData() {
    this._ProductService.getProductsData();
  }
  // get All Products from behavior subject//////////////////////
  getAllProducts() {
    this._ProductService.productsData.subscribe((res: any) => {
      this.allProducts = res.allProducts.slice(0, 6)
    })
    // this._ProductService.getAllProducts().subscribe(res => {
    //   this.allProducts = res.products.slice(0, 6)
    //   console.log(this.allProducts)
    // })
  };

  // get product id/////////////////////////////
  getProductId(id: number) {
    this.productId = id;
    // console.log(this.productId)
  }

  // Delete Product////////////////////////////////
  deleteProduct() {
    this._ProductService.deleteProduct(this.productId).subscribe(res => {
      // console.log(res);
      if (res.isDeleted == "true") {
        this.getAllProducts();
      }
    })
  }

}
