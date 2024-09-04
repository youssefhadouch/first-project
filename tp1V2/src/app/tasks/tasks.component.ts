import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/itask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //disabled:boolean=false;
  newDescriprion:string="";
  tasks:ITask[]=[
    {id:1,description:"task 1", completed:false},
    {id:2,description:"task 2", completed:false},
    {id:3,description:"task 3", completed:true},
  ];

  constructor(){

  }

  ngOnInit(): void {
this.addDate();
  }

  unCompleted( ta:ITask){
    ta.completed=true;

  }

addDate(){
  this.tasks.forEach(task=>{
    if(task.dateAjouter==null){
     task.dateAjouter=new Date();
    }
  })
}

  add(){

  let id=this.tasks.length+1;

  // let dateA=new Date();

  this.tasks.push({id:id,description:this.newDescriprion,completed:false,dateAjouter:new Date("2019/10/10")});
  this.newDescriprion="";


  }

}
