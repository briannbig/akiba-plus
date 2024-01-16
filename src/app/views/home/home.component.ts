import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { SavingCycle } from '../../core/models/saving-cycle';
import { SavingPlanListComponent } from '../../components/saving-plan-list/saving-plan-list.component';
import { SavingService } from '../../core/service/saving.service';
import { SavingPlan } from '../../core/models/saving-plan';
import { AuthService } from '../../core/service/auth/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculatorComponent, CommonModule, SavingPlanListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tarrifs: SavingCycle[] = Object.values(SavingCycle)

  savingPlans: SavingPlan[] | undefined

  constructor(private savingsService: SavingService, private auth: AuthService) { }
  ngOnInit(): void {
    if (this.auth.signedIn()) {
      this.savingsService.getSavings().subscribe(res => this.savingPlans = res)
    }
  }



}
