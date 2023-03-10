import { FormPageComponent } from './Components/form-page/form-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { IsloggedGuard } from '../core/guards/islogged.guard';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'home', canActivate: [IsloggedGuard], component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'productDetails/:id', component: ProductDetailsComponent },
      { path: 'form/add', component: FormPageComponent },
      { path: 'form/update/:id', component: FormPageComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
