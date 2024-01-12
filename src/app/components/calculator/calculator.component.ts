import { Component, OnInit } from '@angular/core';
import { SavingService } from '../../core/service/saving.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SavingPlan } from '../../core/models/saving-plan';
import { User } from '../../core/models/user';
import { SavingCycle } from '../../core/models/saving-cycle';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {


  savingPlan: SavingPlan | undefined

  calcForm = new FormGroup({
    amount: new FormControl(10, { nonNullable: true }),
    duration: new FormControl(3, { nonNullable: true }),
  })

  constructor(private savingsService: SavingService) { }

  ngOnInit(): void {
  }

  calculate() {
    let user: User = {
      lastName: "",
      firstName: "",
      email: "",
      userName: ""
    }

    let duration = this.calcForm.value.duration!;
    let amount = this.calcForm.value.amount!;

    let target = 0

    this.savingPlan = {
      user: user,
      savingCycle: SavingCycle.DAILY,
      aggressive: true,
      duration: duration,
      amount: amount,
      target: target
    }
  }

}
