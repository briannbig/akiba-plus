import { Injectable } from '@angular/core';
import { SavingCycle } from '../models/saving-cycle';
import { SavingStrategy } from '../models/saving-strategy';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateSavingsAmount(
    cycle: SavingCycle,
    strategy: SavingStrategy,
    duration: number,
    savingAmount: number
  ): number {
    let totalSavings = 0

    for (let i = 0; i <= duration; i++) {
      totalSavings += this.calculateSavingPerCycle(savingAmount, strategy, i)
    }

    return totalSavings;
  }

  private calculateSavingPerCycle(
    savingAmount: number,
    strategy: SavingStrategy,
    daysInCycle: number
  ): number {
    if (strategy === SavingStrategy.AGGRESSIVE) {
      return savingAmount * daysInCycle
    }
    else return savingAmount;
  }
}
