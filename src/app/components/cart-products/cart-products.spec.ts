import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProducts } from './cart-products';

describe('CartProducts', () => {
  let component: CartProducts;
  let fixture: ComponentFixture<CartProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
