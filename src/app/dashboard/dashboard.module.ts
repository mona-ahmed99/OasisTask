import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FormPageComponent } from './Components/form-page/form-page.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
