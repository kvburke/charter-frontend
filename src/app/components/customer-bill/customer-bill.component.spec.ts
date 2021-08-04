import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRewardsComponent } from './customer-bill.component';

describe('CustomerBillComponent', () => {
  let component: CustomerRewardsComponent;
  let fixture: ComponentFixture<CustomerRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
