import { Injectable } from '@angular/core';
import { SavingPlan } from '../models/saving-plan';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  private savings: SavingPlan[] = []

  public getSavings(): SavingPlan[] {
    return this.savings;
  }

  public addSaving(savingPlan: SavingPlan) {
    this.savings.push(savingPlan);
  }

}
