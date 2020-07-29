import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DetailComponent} from './component/comic-details/detail.component'
import {HomeComponent} from './component/comic-home/home.component'

const routes: Routes = [
  { path: '',   redirectTo: '/Comics', pathMatch: 'full' },
  { path: 'HeroDetails', component: DetailComponent },
  { path: 'Comics', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

  constructor(){
    
  }
  
}
