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

  getSavingPlanById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  public addPlan(plan: SavingPlan) {
    return this.http.post(this.baseUrl, plan);
  }

  deletePlan(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  addSaving(planId: string, amount: number) {
    return this.http.post(`${this.baseUrl}/add-saving`, { savingPlanId: planId, amount: amount })
  }


}
