import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpfCalcComponent } from './ppf-calc.component';

describe('PpfCalcComponent', () => {
  let component: PpfCalcComponent;
  let fixture: ComponentFixture<PpfCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpfCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpfCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
