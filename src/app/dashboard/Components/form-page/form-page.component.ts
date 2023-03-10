import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../Services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  // variables init/////////
  productId: number = 0;
  currentProduct: any
  // //////////////////////
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.productId = this._ActivatedRoute.snapshot.params['id']
    if (this.productId) {
      this._ProductService.getSingleProduct(this.productId).subscribe(res => {
        this.currentProduct = res
        this.setValues()
      })
    }

  }


  // Create Add New Product Form//////////////////////
  addProductForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  })

  // select Image//////////////////////////////////////
  selectImage(event: any) {
    this.addProductForm.get('image')?.setValue(event.target.files[0].name);
  }

  // submit Add Product////////////////////////////////
  addProduct() {
    this._ProductService.addProduct(this.addProductForm.value).subscribe(res => {
      // console.log(res);
      this.addProductForm.reset();
    })
  }

  //set current product data in the form////////////////
  setValues() {
    this.addProductForm.controls.title.setValue(this.currentProduct.title)
    this.addProductForm.controls.description.setValue(this.currentProduct.description)
    this.addProductForm.controls.category.setValue(this.currentProduct.category)
    this.addProductForm.controls.price.setValue(this.currentProduct.price)
    this.addProductForm.controls.image.setValue(this.currentProduct.images[0])
  }

  // update product/////////////////////////////////
  updateProduct() {
    let data = {
      title: this.addProductForm.value.title,
      description: this.addProductForm.value.description,
      category: this.addProductForm.value.category,
      price: this.addProductForm.value.price,
      image: this.addProductForm.value.image
    }

    this._ProductService.updateProduct(this.productId, data).subscribe(res => {
      // console.log(res);
      this.addProductForm.reset();
    })
  }

}
