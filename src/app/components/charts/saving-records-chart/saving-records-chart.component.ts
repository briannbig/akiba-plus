import { Component, Input, OnInit } from '@angular/core';
import { SavingPlan } from '../../../core/models/saving-plan';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-saving-records-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './saving-records-chart.component.html',
  styleUrl: './saving-records-chart.component.css'
})
export class SavingRecordsChartComponent implements OnInit {

  @Input() savingPlan!: SavingPlan

  chartTitle: string = 'Savings record'

  data?: number[] = []
  labels?: string[] = []

  lineChartData: ChartConfiguration['data'] | undefined
  public lineChartOptions: ChartConfiguration['options'] | undefined


  ngOnInit(): void {

    this.data = this.savingPlan.savings?.map((saving) => { return saving.amount })
    this.labels = this.savingPlan.savings?.map((saving) => {
      let date = saving.timestamp.toLocaleString().substring(5, 10)
      console.log(date);

      return date
    })

    this.lineChartData = {
      datasets: [
        {
          data: this.data!,
          label: 'Saving records',
          fill: 'origin',
        },

      ],
      labels: this.labels
    };

    this.lineChartOptions = {
      elements: {
        line: {
          tension: 0.5,
        },
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        y: {
          position: 'left',
        },
        y1: {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            color: 'red',
          },
        },
      },

      plugins: {
        legend: { display: true },

      },
    };

  }

}
