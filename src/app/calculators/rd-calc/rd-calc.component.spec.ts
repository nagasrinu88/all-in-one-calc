import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdCalcComponent } from './rd-calc.component';

describe('RdCalcComponent', () => {
  let component: RdCalcComponent;
  let fixture: ComponentFixture<RdCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
