import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalcComponent } from './tax-calc.component';

describe('TaxCalcComponent', () => {
  let component: TaxCalcComponent;
  let fixture: ComponentFixture<TaxCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
