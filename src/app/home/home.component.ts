import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { SavingService } from '../core/service/saving.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculatorComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  

  constructor(private savingsService: SavingService) { }
  ngOnInit(): void {
    

  }


}
