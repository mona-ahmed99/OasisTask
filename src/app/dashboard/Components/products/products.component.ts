import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // variables init//////////////////////
  allProducts: any[] = []
  p: number = 1;
  itemsPerPage: number = 6;
  totalProucts: any
  productId: any
  // ////////////////////////////////////
  constructor(private _ProductService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }


  // get all products from behavior subject///////////
  getAllProducts() {
    this._ProductService.productsData.subscribe((res: any) => {
      this.allProducts = res.allProducts
      this.totalProucts = res.totalProducts
    })
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
