import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circle2Component } from './circle2.component';

describe('Circle2Component', () => {
  let component: Circle2Component;
  let fixture: ComponentFixture<Circle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
