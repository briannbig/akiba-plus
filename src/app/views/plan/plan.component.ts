import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SavingService } from '../../core/service/saving.service';
import { SavingPlan } from '../../core/models/saving-plan';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogTitle, MatDialogContent } from '@angular/material/dialog'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SavingProgressChartComponent } from '../../components/charts/saving-progress-chart/saving-progress-chart.component';
import { SavingRecordsChartComponent } from '../../components/charts/saving-records-chart/saving-records-chart.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, ReactiveFormsModule],
  templateUrl: './plan.add.saving.dialog.html',
  styleUrl: './plan.component.css'

})
export class AddSavingDialog implements OnInit {

  savingAmount: number = 0
  planId: string | undefined
  msg: string | undefined

  savingForm = new FormGroup({
    amount: new FormControl(this.savingAmount, { nonNullable: true })
  })

  constructor(@Inject(MAT_DIALOG_DATA) private data: { id: string, amount: number }, private service: SavingService) { }

  ngOnInit(): void {
    this.savingAmount = this.data.amount
    this.planId = this.data.id
  }

  addSaving() {
    this.service.addSaving(this.planId!, this.savingForm.value.amount!).subscribe((res: any) => {
      if (res) {
        this.msg = res.id !== null ? "Saving made" : "Could not make saving"
      }
    })

  }

}

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule, SavingProgressChartComponent, SavingRecordsChartComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit {


  planId: string | undefined
  savingPlan?: SavingPlan
  displayChart: boolean = true;

  constructor(private route: ActivatedRoute, private savingsService: SavingService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.planId = this.route.snapshot.params['id']
    this.fetchPlan();
  }


  deletePlan() {
    this.savingsService.deletePlan(this.savingPlan?.id!).subscribe(
      () => {
        this.router.navigateByUrl('/')

      }
    )
  }

  openAddSavingDialog() {
    this.dialog.open(AddSavingDialog, { data: { "id": this.savingPlan?.id, "amount": this.savingPlan?.amount } })
      .afterClosed().subscribe(() => this.fetchPlan())

  }

  toggleChart() {
    this.displayChart = this.displayChart ? false : true
  }

  private fetchPlan() {
    this.savingsService.getSavingPlanById(this.planId!).subscribe(
      (res: any) => {
        if (res) {
          this.savingPlan = res;
        }
      }
    );
  }


}
