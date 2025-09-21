import { Component } from '@angular/core';
import { CartPorductsService } from '../../services/cart-porducts-service';
import { Iproducts } from '../../modules/iproducts';
import { ICartProducts } from '../../modules/i-cart-products';
import { StaticProducts } from '../../services/static-products';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-cart-products',
  imports: [RouterLink],
  templateUrl: './cart-products.html',
  styleUrl: './cart-products.css'
})
export class CartProducts {
  totlaPrice:number;  
  Products:ICartProducts[];
  constructor(private _cartProductsService:CartPorductsService,
    private _staticProduct:StaticProducts,
private authservice:AuthService
  ){
    this.totlaPrice= this._cartProductsService.getTotalPrice() 
    this.Products = this._cartProductsService.getCounterCartProducts(); 

  }  
  ponas(pro:ICartProducts){ 
    this.totlaPrice += pro.prod.price; 
    pro.quantity++; 
    pro.prod.amount--;
    this.updateTotalPrice();
  }  
  minas(pro:ICartProducts){
    this.totlaPrice-= pro.prod.price; 
    pro.quantity--; 
    pro.prod.amount++;
    this.updateTotalPrice(); 
    if(pro.quantity==0){
      this.remove(pro);
    }
  } 
  remove(pro:ICartProducts){
    pro.prod.amount += pro.quantity;
    const filteredUsers = this.Products.filter((produc)=>produc.prod.id!==pro.prod.id) 
    this.Products = filteredUsers; 
    this.totlaPrice -= (pro.quantity*pro.prod.price);
    this.authservice.items--;
 let numbers: number[] = JSON.parse(localStorage.getItem('roundednumber') ?? '[]');
numbers=numbers.filter(PRO=>PRO!==pro.prod.id);
localStorage.setItem("roundednumber",JSON.stringify(numbers) );
    this.updateTotalPrice(); 
    this._cartProductsService.setCounterCartProducts(filteredUsers);
  } 

  show(){
    alert("Thanks For Using Our Website")
  } 
  updateTotalPrice():void{
    this._cartProductsService.setTotalPrice(this.totlaPrice);
  } 
  

}