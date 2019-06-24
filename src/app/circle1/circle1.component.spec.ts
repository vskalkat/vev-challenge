import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Circle1Component } from './circle1.component';

describe('Circle1Component', () => {
  let component: Circle1Component;
  let fixture: ComponentFixture<Circle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Circle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Circle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
