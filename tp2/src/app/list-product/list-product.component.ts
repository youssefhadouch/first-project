import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../models/product.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:Product[]=[];
  formgroup!:FormGroup;
  searchText1!:string;

  sortField: string = '';
  sortOrder: string = 'asc';
  constructor(private proservice: ProductServiceService, private fb: FormBuilder, private router: Router){

 }

 ngOnInit(): void {
  // this.formgroup=this.fb.group({
  //   keyword: this.fb.control(null),
  // });
this.getAll();

   }

   getAll(){
    this.proservice.getAllPro().subscribe({
      next:(data)=>{
        this.products=data;
      }
    })
   }
   handleSearch() {
    this.searchText1 = this.formgroup.value.keyword;
  }

  handleAdd(){
         this.router.navigateByUrl("/add");
  }

  handleStock(p:Product){
    this.proservice.changeStock(p.id).subscribe({
  next:(data)=>{

  }
    })
        // p.stock=!p.stock;
  }



  sortData(field: string) {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }
  }

  //  handleSearch(){
  // let keyword=this.formgroup.value.keyword;
  //    this.proservice.search(keyword).subscribe({
  //     next:(data)=>{
  //       this.products=data;
  //     }
  //    })
  //  }


}
