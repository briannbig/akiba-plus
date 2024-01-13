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
      currentTotal = this.calculateSavingsTargetAmount(strategy, duration, startingAmount)

    }

    return startingAmount;
  }

  calculateEndDate(
    cycle: SavingCycle,
    strategy: SavingStrategy,
    startingAmount: number,
    targetAmount: number,
    startdate: Date
  ): Date {
    let currentDate = new Date(startdate);
    let currentTotal = 0;

    while (currentTotal < targetAmount) {
      currentTotal = this.calculateSavingsTargetAmount(strategy, this.calculateOccurrences(currentDate, cycle), startingAmount)
      currentDate = this.getNextDate(currentDate, this.calculateOccurrences(currentDate, cycle))
    }

    return currentDate;
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

  private calculateOccurrences(
    currentDate: Date, cycle: SavingCycle
  ): number {
    switch (cycle) {
      case SavingCycle.DAILY:
        return 1;
      case SavingCycle.WEEKLY:
        return Math.floor(this.daysUntilNextOccurence(currentDate, 7));
      case SavingCycle.BI_WEEKLY:
        return Math.floor(this.daysUntilNextOccurence(currentDate, 14));
      case SavingCycle.MONTHLY:
        return Math.floor(this.daysUntilNextOccurence(currentDate, 30));
      default:
        return 0;
    }
  }
  private daysUntilNextOccurence(currentDate: Date, daysInCycle: number): number {
    const nextOccurenceDate = this.getNextDate(currentDate, daysInCycle);
    return (nextOccurenceDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
  }

  private getNextDate(currentDate: Date, daysInCycle: number): Date {
    const nextDate = new Date(currentDate);

    nextDate.setDate(currentDate.getDate() + daysInCycle);

    return nextDate;
  }
}
