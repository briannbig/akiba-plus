import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProgressChartComponent } from './saving-progress-chart.component';

describe('SavingProgressChartComponent', () => {
  let component: SavingProgressChartComponent;
  let fixture: ComponentFixture<SavingProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingProgressChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
