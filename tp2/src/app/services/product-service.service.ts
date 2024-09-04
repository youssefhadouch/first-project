import { Injectable } from '@angular/core';
import { Product } from '../models/product.module';
import { findIndex, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

   products:Product[]=[];


  constructor() {
this.products=[
  {id:1,name:"computer",price:1200,category:"hp",stock:true},
  {id:2,name:"computer",price:5200,category:"lenovo",stock:false},
  {id:3,name:"smartphone",price:2200,category:"A10",stock:true},
]
 }

 public getAllPro():Observable<Product[]>{
  return of(this.products);

 }

//  public search(keyword: string): Observable<Product[]> {
//   const pros: Product[] = this.products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
//   return of(pros);
// }

public ajouter(name:string, price:number,category:string,stock:boolean): Observable<boolean>{

  let id=this.products.length+1;
  this.products.push({id:id,name:name,price:price,category:category,stock:stock});
 return of(true);
}

public changeStock(id:number): Observable<boolean>{

  let index=this.products.findIndex(p=>p.id==id);
  if(index==-1){
    return of(false);
  }

  this.products[index].stock=!this.products[index].stock;
  return of(true);

}

}
