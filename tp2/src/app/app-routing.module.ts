import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'products', component: ListProductComponent},
  {path:'add', component: AddProductComponent},
   {path:'', component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
