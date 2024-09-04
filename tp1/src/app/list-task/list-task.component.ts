import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task.module';
import { Router } from '@angular/router';
import { ListTasService } from '../services/list-tas.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks:ITask[]=[];

constructor(private serv:ListTasService,private router: Router){

}
  ngOnInit(): void {
 this.getAll();
  }
  getAll(){
    this.serv.getAllTask().subscribe({
      next: (data)=>{
               this.tasks=data;
      }
    })
  }


  completed(task: ITask) {
    task.completed = true;
  }

  handleAdd(){
     this.router.navigateByUrl("/ajouter");
  }
}
