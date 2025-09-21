import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersetting } from './usersetting';

describe('Usersetting', () => {
  let component: Usersetting;
  let fixture: ComponentFixture<Usersetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
