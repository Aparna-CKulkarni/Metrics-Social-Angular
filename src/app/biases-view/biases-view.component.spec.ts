import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiasesViewComponent } from './biases-view.component';

describe('BiasesViewComponent', () => {
  let component: BiasesViewComponent;
  let fixture: ComponentFixture<BiasesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiasesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
