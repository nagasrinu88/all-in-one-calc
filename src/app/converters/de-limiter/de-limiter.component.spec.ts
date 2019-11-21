import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeLimiterComponent } from './de-limiter.component';

describe('DeLimiterComponent', () => {
  let component: DeLimiterComponent;
  let fixture: ComponentFixture<DeLimiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeLimiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeLimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
