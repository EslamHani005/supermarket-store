import { TestBed } from '@angular/core/testing';

import { Usersetting } from './usersetting';

describe('Usersetting', () => {
  let service: Usersetting;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usersetting);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
