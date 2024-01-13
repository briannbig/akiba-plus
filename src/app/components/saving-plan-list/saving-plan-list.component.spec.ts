import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingPlanListComponent } from './saving-plan-list.component';

describe('SavingPlanListComponent', () => {
  let component: SavingPlanListComponent;
  let fixture: ComponentFixture<SavingPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingPlanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
