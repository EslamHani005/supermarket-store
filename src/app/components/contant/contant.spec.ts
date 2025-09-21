import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contant } from './contant';

describe('Contant', () => {
  let component: Contant;
  let fixture: ComponentFixture<Contant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
