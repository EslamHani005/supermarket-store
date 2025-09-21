import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Iproducts } from '../../modules/iproducts';


@Component({
  selector: 'app-fruits',
  imports: [CommonModule,FormsModule],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class Fruits {
  products:Iproducts[];
      constructor(){
        this.products = [
          {id:1,name:'apple',urlImage:'assets/images/vegetables/potato.jfif',amount:2,price:20,catId:3},
          {id:2,name:'banana',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\product-thumb-4.png',amount:0,price:25,catId:3},
          {id:3,name:'fruit3',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\carret.jfif',amount:1,price:30,catId:3},
          {id:4,name:'fruit4',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\potato.jfif',amount:6,price:15,catId:3},
          {id:5,name:'fruit5',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\potato.jfif',amount:0,price:50,catId:3},
          {id:6,name:'fruit6',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\potato.jfif',amount:1,price:17,catId:3},
          {id:8,name:'fruit6',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\potato.jfif',amount:5,price:17,catId:3},
          {id:7,name:'fruit6',urlImage:'D:\programing\coure_ITI_anangular\projects\angular_project\project\images\vegetables\potato.jfif',amount:0,price:17,catId:3},
        ]
      } 
}
