import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SavingPlan } from '../../core/models/saving-plan';
import { User } from '../../core/models/user';
import { SavingCycle } from '../../core/models/saving-cycle';
import { SavingStrategy } from '../../core/models/saving-strategy';
import { CalculatorService } from '../../core/service/calculator.service';

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
  strategies = Object.values(SavingStrategy)

  calcForm = new FormGroup({
    tarrif: new FormControl(SavingCycle.DAILY, { nonNullable: true }),
    amount: new FormControl(10, { nonNullable: true }),
    duration: new FormControl(3, { nonNullable: true }),
    strategy: new FormControl(SavingStrategy.NORMAL, { nonNullable: true }),
  })

  constructor(private calculatorService: CalculatorService) { }


  calculate() {
    let user: User = {
      lastName: "",
      firstName: "",
      email: "",
      userName: ""
    }

    let duration = this.calcForm.value.duration!;
    let amount = this.calcForm.value.amount!;
    let tarrif = this.calcForm.value.tarrif!;
    let strategy = this.calcForm.value.strategy!;

    let target = this.calculatorService.calculateSavingsTargetAmount(strategy, duration, amount
    )

    this.savingPlan = {
      user: user,
      savingCycle: tarrif,
      strategy: strategy,
      duration: duration,
      amount: amount,
      target: target
    }
  }

}
