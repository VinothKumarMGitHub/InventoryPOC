import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';


HighchartsMore(Highcharts);

@Component({
  selector: 'app-idleinventories',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './idleinventories.component.html',
  styleUrl: './idleinventories.component.scss'
})
export class IdleinventoriesComponent implements OnInit {

  ngOnInit(): void {
      this.createChartPie();
  }
  
  private createChartPie(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
        backgroundColor: 'rgb(245, 245, 245)'
      },
      title: {
        text: 'Idle Inventory',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },
      series: [{
        name: null,
        innerSize: '50%',
        data,
      }],
    } as any);

    
  }

  
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
