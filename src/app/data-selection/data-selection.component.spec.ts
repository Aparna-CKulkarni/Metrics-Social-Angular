import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSelection.Component } from './data-selection.component';

describe('DataSelection.Component', () => {
  let component: DataSelection.Component;
  let fixture: ComponentFixture<DataSelection.Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSelection.Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSelection.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
