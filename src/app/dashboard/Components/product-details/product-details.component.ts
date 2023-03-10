import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // variables init////////////////////
  id: number = 0
  productDetails: any
  // /////////////////////////////////
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService) {
    this.id = _ActivatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.getSingleProduct();
  }

  // get single product//////////////////////////
  getSingleProduct() {
    this._ProductService.getSingleProduct(this.id).subscribe(res => {
      this.productDetails = res
      console.log(this.productDetails)
    })
  }

}
