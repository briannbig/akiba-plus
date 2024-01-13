import { Component } from '@angular/core';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { SavingCycle } from '../core/models/saving-cycle';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculatorComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tarrifs: SavingCycle[] = Object.values(SavingCycle)


}
