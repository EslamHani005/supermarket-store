import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Iproducts } from '../../modules/iproducts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Icatedory } from '../../modules/icatedory';
import { StaticProducts } from '../../services/static-products';
import { CartPorductsService } from '../../services/cart-porducts-service';
import { AuthService } from '../../auth';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  selectCatId: number = 1;
  products: Iproducts[];
  categories: Icatedory[];
  filterProducts: Iproducts[];
  recievedCatId: number = 0;
  constructor(private _staticProduct: StaticProducts,
    private router: Router,
    private _cartProductsService: CartPorductsService,
    private authservice: AuthService
  ) {
    this.products = this._staticProduct.getProducts();
    this.categories = [
      { id: 1, name: 'vegetables' },
      { id: 2, name: 'meats' },
      { id: 3, name: 'fruits' }
    ];
    this.filterProducts = this.products;
  }


  setSelectCatId(id: number) {
    this.selectCatId = id;
  }

  getFilterProductu(): void {
    this._staticProduct.getProductsByCatId(this.selectCatId);
  }

  // getFilterProductu(){ 
  //   if(this.selectCatId==-1){
  //     this.filterProducts = this.products;
  //   }
  //   else{
  //     this.filterProducts = this.products.filter((pro)=>pro.catId==this.selectCatId);
  //   }
  // } 

  navigateToDetails(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }

  buy(count: string, id: number) {
    if (+count > 0) {
      this._cartProductsService.setcatProduct(+count, id);
      let pro = this.products.find((pro) => pro.id == id)
      if (pro == null) {
        alert("null");
      }
  else  if (pro.amount > 0 && pro.amount >= +count) {
 const numbers: number[] = JSON.parse(localStorage.getItem('roundednumber') ?? '[]');

console.log("انا قبل الشرط ")
        // التأكد إن الـ id موجود في array
        if (!numbers.find(id => id === pro.id)) {
          console.log("انا بعد الشرط ")

          this.authservice.items++;
          numbers.push(pro.id);
          localStorage.setItem('roundednumber', JSON.stringify(numbers))
        }
        pro.amount -= +count;
      }
    }
  
    else{
  if (+count < 0) {
    alert("the vaule is Negative")
  }
  else {
    alert("Enter Quantity")
  }
}
  }
handleBuy(counter: string, id: number) {
  if (!this.products) {
    alert("Product not found!");
    return;
  }

  if (this.authservice.isloged) {
    this.buy(counter, id);
  } else {
    this.router.navigate(['/login']);
  }
} 
  
}

