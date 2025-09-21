import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruits } from './fruits';

describe('Fruits', () => {
  let component: Fruits;
  let fixture: ComponentFixture<Fruits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
