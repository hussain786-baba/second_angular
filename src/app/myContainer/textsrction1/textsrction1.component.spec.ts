import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textsrction1Component } from './textsrction1.component';

describe('Textsrction1Component', () => {
  let component: Textsrction1Component;
  let fixture: ComponentFixture<Textsrction1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textsrction1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textsrction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
