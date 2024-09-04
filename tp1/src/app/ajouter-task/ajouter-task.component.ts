import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListTasService } from '../services/list-tas.service';
import { ITask } from '../models/task.module';

@Component({
  selector: 'app-ajouter-task',
  templateUrl: './ajouter-task.component.html',
  styleUrls: ['./ajouter-task.component.css']
})
export class AjouterTaskComponent implements OnInit  {

  description!:string;
  completed!:boolean;
constructor(private serv:ListTasService,private router: Router){

}
  ngOnInit(): void {

  }


  add(){
     this.serv.addTask(this.description,this.completed).subscribe({
      next: (data)=>{
          this.router.navigateByUrl("/list-task");
      }
     })

  }








}
