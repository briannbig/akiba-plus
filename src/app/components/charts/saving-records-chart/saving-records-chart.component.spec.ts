import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingRecordsChartComponent } from './saving-records-chart.component';

describe('SavingRecordsChartComponent', () => {
  let component: SavingRecordsChartComponent;
  let fixture: ComponentFixture<SavingRecordsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingRecordsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingRecordsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
