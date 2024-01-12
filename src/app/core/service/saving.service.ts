import { Injectable } from '@angular/core';
import { SavingPlan } from '../models/saving-plan';
import { Tarrif } from '../models/tarrif';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  private savings: SavingPlan[] = []

  private tarrifs: Tarrif[] = []

  constructor() {
    this.tarrifs.push(
      Tarrif.DAILY,
      Tarrif.WEEKLY,
      Tarrif.WEEKLY_AGGRESSIVE,
      Tarrif.BI_WEEKLY,
      Tarrif.BI_WEEKLY_AGGRESSIVE,
      Tarrif.MONTHLY,
      Tarrif.MONTHLY_AGGRESSIVE
    )
  }


  public getTarrifs(): Tarrif[] {
    return this.tarrifs;
  }

  public getSavings(): SavingPlan[] {
    return this.savings;
  }

  public addSaving(savingPlan: SavingPlan) {
    this.savings.push(savingPlan);
  }

}
