import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac2Component } from './prac2.component';

describe('Prac2Component', () => {
  let component: Prac2Component;
  let fixture: ComponentFixture<Prac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prac2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
