import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanPartPaymentCalcComponent } from './home-loan-part-payment-calc.component';

describe('HomeLoanPartPaymentCalcComponent', () => {
  let component: HomeLoanPartPaymentCalcComponent;
  let fixture: ComponentFixture<HomeLoanPartPaymentCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanPartPaymentCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanPartPaymentCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
