import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SavingService } from '../../core/service/saving.service';
import { SavingPlan } from '../../core/models/saving-plan';
import { SavingPlanListItem } from '../../components/saving-plan-list/saving-plan-list.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [SavingPlanListItem],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit {

  planId: string | undefined
  savingPlan: SavingPlan | undefined

  constructor(private route: ActivatedRoute, private savingsService: SavingService) { }

  ngOnInit(): void {
    this.planId = this.route.snapshot.params['id']
    this.savingsService.getSavingPlanById(this.planId!).subscribe(
      (res: any) => {
        if (res) {
          this.savingPlan = res
        }
      }
    )
  }


}
