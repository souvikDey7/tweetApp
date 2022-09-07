import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
  //  {
  //    path: 'tweets',
  //    component: SucessComponent
  //  }, 
  {
     path: 'tweets', loadChildren: () => import('./sucess/sucess.module')
       .then(m => m.SucessModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule { }
