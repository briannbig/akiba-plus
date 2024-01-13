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

  getSavingPlanById(id: number): SavingPlan | undefined {
    return this.savings.find(s => s.id === id)
  }

  public addPlan(savingPlan: SavingPlan) {
    let id = this.savings.length
    savingPlan.id = id++
    this.savings.push(savingPlan);
  }

}
