import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMetricsComponent } from './generate-metrics.component';

describe('GenerateMetricsComponent', () => {
  let component: GenerateMetricsComponent;
  let fixture: ComponentFixture<GenerateMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
