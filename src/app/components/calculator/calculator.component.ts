import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SavingPlan } from '../../core/models/saving-plan';
import { User } from '../../core/models/user';
import { SavingCycle } from '../../core/models/saving-cycle';
import { SavingStrategy } from '../../core/models/saving-strategy';
import { CalculatorService } from '../../core/service/calculator.service';
import { SavingService } from '../../core/service/saving.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {


  savingPlan: SavingPlan | undefined
  tarrifs = Object.values(SavingCycle)
  strategy: SavingStrategy = SavingStrategy.NORMAL
  aggressive: boolean = false

  calcForm = new FormGroup({
    tarrif: new FormControl(SavingCycle.DAILY, { nonNullable: true }),
    amount: new FormControl(10, { nonNullable: true }),
    duration: new FormControl(3, { nonNullable: true }),
  })

  constructor(private calculatorService: CalculatorService, private savingsService: SavingService) { }


  calculate() {
    const user: User = {
      lastName: "",
      firstName: "",
      email: "",
      userName: ""
    }

    const duration = this.calcForm.value.duration!;
    const amount = this.calcForm.value.amount!;
    const tarrif = this.calcForm.value.tarrif!;

    const startdate = new Date()

    const target = this.calculatorService.calculateSavingsTargetAmount(this.strategy, duration, amount)

    this.savingPlan = {
      user: user,
      savingCycle: tarrif,
      strategy: this.strategy,
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
    this.savingsService.addPlan(this.savingPlan!)
  }

  toggleStrategy() {
    this.strategy = this.strategy === SavingStrategy.AGGRESSIVE ?
      SavingStrategy.NORMAL : SavingStrategy.AGGRESSIVE
    this.aggressive = this.strategy === SavingStrategy.AGGRESSIVE
  }

}