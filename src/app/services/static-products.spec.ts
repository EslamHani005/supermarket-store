import { TestBed } from '@angular/core/testing';

import { StaticProducts } from './static-products';

describe('StaticProducts', () => {
  let service: StaticProducts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticProducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
