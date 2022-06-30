import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprNumComponent } from './expr-num.component';

describe('ExprNumComponent', () => {
  let component: ExprNumComponent;
  let fixture: ComponentFixture<ExprNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExprNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExprNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
