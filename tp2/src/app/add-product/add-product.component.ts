import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
name!:string;
price!:number;
category!:string;
stock!:boolean;
constructor(private service: ProductServiceService, private router:Router){

}

  ngOnInit(): void {

  }

  add(){
       this.service.ajouter(this.name,this.price,this.category,this.stock).subscribe({
        next: (data)=>{
          this.router.navigateByUrl("/products");
        }
       })
  }
}
