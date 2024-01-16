import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartConfiguration } from 'chart.js';
import { SavingPlan } from '../../../core/models/saving-plan';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-saving-progress-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './saving-progress-chart.component.html',
  styleUrl: './saving-progress-chart.component.css'
})
export class SavingProgressChartComponent implements OnInit {


  @Input() savingPlan?: SavingPlan

  chartTitle: string = 'goalProgress'
  chartType = 'doughnut'
  public chartLables = ['target', 'saved']
  public chartColors = ['crimson', 'lightGreen']
  chartData: ChartData<'doughnut'> | undefined
  chartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] | undefined
  chartOptions: ChartConfiguration<'doughnut'>['options'] = { responsive: true, }

  chart: any


  ngOnInit(): void {
    this.chartDatasets = [
      {
        data: [this.savingPlan?.target?? 0, this.savingPlan?.currentBalance?? 1],
        label: 'goal target',
      },
    ];
  }

}
