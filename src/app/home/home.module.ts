import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home.rouingModule';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
