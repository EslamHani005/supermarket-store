import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../modules/iproducts';
import { ActivatedRoute } from '@angular/router';
import { StaticProducts } from '../../services/static-products';
import { Location } from '@angular/common';
import { CartPorductsService } from '../../services/cart-porducts-service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details implements OnInit {

  currentId: number = 0;
  product: Iproducts | null = null;
  counterInt = { value: '1' }; // مجرد مثال، ممكن يكون bound بالـ input

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _staticproducts: StaticProducts,
    private _location: Location,
    private _cartProductsService: CartPorductsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._staticproducts.getProductById(this.currentId);
  }

  isDisabled(): boolean {
    return this.product?.amount === 0;
  }

  goBack() {
    this._location.back();
  }

  buy(count: string, id: number) { 
    if (+count > 0) {
      this._cartProductsService.setcatProduct(+count, id);
    } else if (+count < 0) {
      alert("The value is negative");
    } else {
      alert("Enter quantity");
    }
  }

  quantityInput(count: string, id: number) {
    const pro = this._staticproducts.getProductById(id);  
    if (pro) pro.amount -= +count;
  }

  handleBuy(counter: string) {
    if (!this.product) {
      alert("Product not found!");
      return;
    }

    if (this.authService.isloged) {
      this.buy(counter, this.product.id);
      this.quantityInput(counter, this.product.id);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
