import { Injectable } from '@angular/core';
import { SavingCycle } from '../models/saving-cycle';
import { SavingStrategy } from '../models/saving-strategy';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateSavingsTargetAmount(
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

  private calculateStartingAmount(
    strategy: SavingStrategy,
    targetAmount: number,
    duration: number
  ): number {
    let startingAmount = 0;
    let currentTotal = 0;

    while (currentTotal < targetAmount) {
      startingAmount += 1;
      currentTotal = this.calculateSavingsTargetAmount(strategy, duration,startingAmount)
      
    }

    return startingAmount;
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
