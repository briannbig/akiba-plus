import { Component, Input } from '@angular/core';
import { SavingPlan } from '../../core/models/saving-plan';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-saving-plan-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './saving-plan-list-item.component.html',
  styleUrl: './saving-plan-list.component.css'
})
export class SavingPlanListItem {

  @Input() savingPlan!: SavingPlan

}

@Component({
  selector: 'app-saving-plan-list',
  standalone: true,
  imports: [CommonModule, SavingPlanListItem],
  templateUrl: './saving-plan-list.component.html',
  styleUrl: './saving-plan-list.component.css'
})
export class SavingPlanListComponent {

  @Input() savingPlans!: SavingPlan[]

}

