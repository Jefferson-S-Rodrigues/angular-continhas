import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenhoForcaComponent } from './desenho-forca.component';

describe('DesenhoForcaComponent', () => {
  let component: DesenhoForcaComponent;
  let fixture: ComponentFixture<DesenhoForcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenhoForcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenhoForcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
