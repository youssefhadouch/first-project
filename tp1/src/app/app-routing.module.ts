import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { AjouterTaskComponent } from './ajouter-task/ajouter-task.component';

const routes: Routes = [
  {path:'list-task', component: ListTaskComponent},
  {path:'ajouter', component: AjouterTaskComponent},
  {path:'', component: ListTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
