import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider'
import { CommonModule } from '@angular/common';
import { SavingPlan } from '../../core/models/saving-plan';
import { SavingCycle } from '../../core/models/saving-cycle';
import { SavingStrategy } from '../../core/models/saving-strategy';
import { CalculatorService } from '../../core/service/calculator.service';
import { SavingService } from '../../core/service/saving.service';
import { AuthService } from '../../core/service/auth/auth.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {


  @Output() planAdded = new EventEmitter<SavingPlan>();

  isLoggedIn: boolean = false

  savingPlan: SavingPlan | undefined
  tarrifs = Object.values(SavingCycle)

  strategy: SavingStrategy = SavingStrategy.NORMAL
  aggressive: boolean = false
  savingCycle: SavingCycle = SavingCycle.DAILY


  showTicks: boolean = true
  durationSteps: number = 1
  amountSteps: number = 5
  thumbLabel: boolean = true

  savingAmount: number = 0
  duration: number = 0

  maxSavingAmount: number = 10000
  minSavingAmount: number = 0

  minDuration: number = 1
  maxDuration: number = 365


  goal: string | undefined

  // calcForm = new FormGroup({
  //   tarrif: new FormControl(SavingCycle.DAILY, { nonNullable: true }),
  //   amount: new FormControl(10, { nonNullable: true }),
  //   duration: new FormControl(3, { nonNullable: true }),
  //   goal: new FormControl('')

  // })

  constructor(private calculatorService: CalculatorService, private savingsService: SavingService, private auth: AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.signedIn()
  }


  calculate() {
    const duration = this.duration
    const amount = this.savingAmount
    const savingCycle = this.savingCycle

    const startdate = new Date()

    const target = this.calculatorService.calculateSavingsTargetAmount(this.strategy, duration, amount)

    this.savingPlan = {
      savingCycle: savingCycle,
      savingStrategy: this.strategy,
      duration: duration,
      amount: amount,
      target: target,
      startdate: startdate,
    }
  }

  reset() {
    this.savingPlan = undefined
  }

  createPlan() {
    this.savingPlan!.goal = this.goal
    this.savingsService.addPlan(this.savingPlan!).subscribe((res: any) => {
      if (res) {
        this.planAdded.emit(res)
      }
    })
  }

  toggleStrategy() {
    this.strategy = this.strategy === SavingStrategy.AGGRESSIVE ?
      SavingStrategy.NORMAL : SavingStrategy.AGGRESSIVE
    this.aggressive = this.strategy === SavingStrategy.AGGRESSIVE
  }

}
