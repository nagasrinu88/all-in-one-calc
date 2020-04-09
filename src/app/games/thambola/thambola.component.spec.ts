import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThambolaComponent } from './thambola.component';

describe('ThambolaComponent', () => {
  let component: ThambolaComponent;
  let fixture: ComponentFixture<ThambolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThambolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThambolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
