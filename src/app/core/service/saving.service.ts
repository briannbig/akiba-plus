import { Injectable } from '@angular/core';
import { SavingPlan } from '../models/saving-plan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  private baseUrl: string = "http://localhost:8080/api/v1/plans"
  constructor(private http: HttpClient) { }

  private savings: SavingPlan[] = []

  public getSavings() {
    return this.http.get<SavingPlan[]>(this.baseUrl)
  }

  getSavingPlanById(id: number): SavingPlan | undefined {
    return this.savings.find(s => s.id === id)
  }

  public addPlan(plan: SavingPlan) {
    return this.http.post(this.baseUrl, plan);
  }

}
