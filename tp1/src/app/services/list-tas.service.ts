import { Injectable } from '@angular/core';
import { ITask } from '../models/task.module';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListTasService  {


  tasks:ITask[]=[];

  constructor(){
    this.tasks=[
      {id:1,description:"tasks 1", completed:true},
      {id:2,description:"tasks 2", completed:false},
      {id:3,description:"tasks 3", completed:true},
    ]

  }
 public getAllTask():Observable<ITask[]>{
  return of(this.tasks);
}


public addTask(descri:string, comp:boolean):Observable<boolean>{
    let id=this.tasks.length+1;

    this.tasks.push({id:id,description:descri, completed:comp});


  return of(true);
}
  }

