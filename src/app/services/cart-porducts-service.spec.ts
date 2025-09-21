import { TestBed } from '@angular/core/testing';

import { CartPorductsService } from './cart-porducts-service';

describe('CartPorductsService', () => {
  let service: CartPorductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPorductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
