import { Injectable } from '@angular/core';
import { StaticProducts } from './static-products';
import { ICartProducts } from '../modules/i-cart-products';

@Injectable({
  providedIn: 'root'
})
export class CartPorductsService { 
  CounterCartProducts:ICartProducts[];
  // cartProducts:Iproducts[];  
  totalOrderPrice:number=0; 
  priceProduct:number=0;
  constructor(private _staticProducts:StaticProducts){
    // this.cartProducts=[]; 
    this.CounterCartProducts=[];
  }  
  setTotalPrice(newTotalPrice:number){
    this.totalOrderPrice = newTotalPrice;
  }
  setcatProduct(count:number,id:number):void{
    let pro = this._staticProducts.getProductById(id);
    if(!pro){
      return alert("error masseg");
    }
    this.totalOrderPrice += pro.price *count; 
    // this.cartProducts.push(pro);   
    let x = this.getCatProductById(pro.id);
    if(x==null){
      this.CounterCartProducts.push({quantity:count,prod:pro});
    } 
    else{ 
      let numberOld = this.getcunter(x,id);
      x.quantity = (numberOld + count)
    }
    
  }  
  getCatProductById(id:number):ICartProducts | null {
    let foundedpro = this.CounterCartProducts.find((product)=>product.prod.id==id);
    return foundedpro ? foundedpro : null;
  }  
  getcunter(x:ICartProducts,id:number):number{ 
    if(x.prod.id==id){
      return x.quantity;
    }else{
      return 0;
    }
  }
  getTotalPrice():number{
    return this.totalOrderPrice;
  }   
  getCounterCartProducts():ICartProducts[]{
    return this.CounterCartProducts
  }
  setCounterCartProducts(newProducts:ICartProducts[]){
    this.CounterCartProducts= newProducts;
  }
}