import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
HighchartsGantt(Highcharts);

var ProjectData = {
  "projects": [
    {
      "name": "Project 1",
      "progress": 80,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "In Progress" },
        { "name": "Task 3", "status": "Pending" }
      ]
    },
    {
      "name": "Project 2",
      "progress": 45,
      "status": "On Hold",
      "tasks": [
        { "name": "Task 1", "status": "In Progress" },
        { "name": "Task 2", "status": "Pending" }
      ]
    },
    {
      "name": "Project 3",
      "progress": 20,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "Completed" },
        { "name": "Task 3", "status": "In Progress" },
        { "name": "Task 4", "status": "Pending" }
      ]
    },
    {
      "name": "Project 4",
      "progress": 60,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "In Progress" },
        { "name": "Task 3", "status": "In Progress" },
        { "name": "Task 4", "status": "Pending" }
      ]
    },
    {
      "name": "Project 5",
      "progress": 75,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "Completed" },
        { "name": "Task 3", "status": "In Progress" }
      ]
    },
    {
      "name": "Project 6",
      "progress": 90,
      "status": "Completed",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "Completed" }
      ]
    },
    {
      "name": "Project 7",
      "progress": 15,
      "status": "On Hold",
      "tasks": [
        { "name": "Task 1", "status": "In Progress" },
        { "name": "Task 2", "status": "Pending" }
      ]
    },
    {
      "name": "Project 8",
      "progress": 50,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "Pending" },
        { "name": "Task 3", "status": "In Progress" }
      ]
    },
    {
      "name": "Project 9",
      "progress": 40,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "Pending" },
        { "name": "Task 3", "status": "Pending" }
      ]
    },
    {
      "name": "Project 10",
      "progress": 70,
      "status": "In Progress",
      "tasks": [
        { "name": "Task 1", "status": "Completed" },
        { "name": "Task 2", "status": "Completed" },
        { "name": "Task 3", "status": "In Progress" },
        { "name": "Task 4", "status": "In Progress" }
      ]
    }
  ]
};


interface ExtendedYAxisLabelsOptions extends Highcharts.YAxisLabelsOptions {
  events: YAxisLabelsEvents
}


interface YAxisLabelsEvents {
  click(): void;
}

@Component({
  selector: 'app-progress-summary',
  standalone: true,
  imports: [MatCardModule,HighchartsChartModule],
  templateUrl: './progress-summary.component.html',
  styleUrl: './progress-summary.component.scss'
})
export class ProgressSummaryComponent implements OnInit {
  highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions  = {
      chart: {
        backgroundColor: 'rgb(245, 245, 245)',
        scrollablePlotArea: {
          minHeight: 100,
        },
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          pointWidth: 80,
          dataLabels: {
            enabled: true,
            useHTML: true,
            align: 'left',
            color: 'white',
            formatter: function () {
              
            } as any,
          },
        } as any,
      },
       
      title: {
        text: "Gantt Chart with Progress Indicators"
      },
      yAxis:{
        labels: {
          events: {
            // click: function() { console.log(this) } 
          } 
          } as ExtendedYAxisLabelsOptions, 
          plotBands: [{ // mark the weekend
            color: '#FCFFC5',
            from: Date.UTC(2010, 0, 2),
            to: Date.UTC(2010, 0, 4),
            events: {
                // click: e => {
                //     alert("hell")
                // }
            }
        }] 
        
      },
      xAxis: {
        min: Date.UTC(2014, 10, 17),
        max: Date.UTC(2014, 10, 30)
      },
      series: [
        {
          type: "gantt",
          name: "Project 1",
          data: [
            {
              name: "Start prototype",
              start: Date.UTC(2014, 10, 18),
              end: Date.UTC(2014, 10, 25),
              completed: 0.25
            },
            {
              name: "Test prototype",
              start: Date.UTC(2014, 10, 27),
              end: Date.UTC(2014, 10, 29)
            },
            {
              name: "Develop",
              start: Date.UTC(2014, 10, 20),
              end: Date.UTC(2014, 10, 25),
              completed: {
                amount: 0.12,
                fill: "#fa0"
              }
            },
            {
              name: "Run acceptance tests",
              start: Date.UTC(2014, 10, 23),
              end: Date.UTC(2014, 10, 26)
            }
          ],
        }
      ]
    };
     
  }
}
