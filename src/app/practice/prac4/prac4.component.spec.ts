import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac4Component } from './prac4.component';

describe('Prac4Component', () => {
  let component: Prac4Component;
  let fixture: ComponentFixture<Prac4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prac4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prac4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
