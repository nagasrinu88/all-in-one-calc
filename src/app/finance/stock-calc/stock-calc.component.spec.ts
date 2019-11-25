import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCalcComponent } from './stock-calc.component';

describe('StockCalcComponent', () => {
  let component: StockCalcComponent;
  let fixture: ComponentFixture<StockCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
