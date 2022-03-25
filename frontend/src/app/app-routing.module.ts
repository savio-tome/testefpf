import { ProjectcreateComponent } from './components/projectcreate/projectcreate.component';

import { HomeComponent } from './mainpage/home/home.component';
import { ProjectcComponent } from './components/projectc/projectc.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"projects",
    component:ProjectcComponent
  },
  {
    path:"project/create",
    component:ProjectcreateComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
