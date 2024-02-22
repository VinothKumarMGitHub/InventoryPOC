import {  Component, OnInit, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import HighchartsSunburst from 'highcharts/modules/sunburst';

HighchartsSunburst(Highcharts);

import materialsReceived from "../../../assets/materialsreceived.json"


interface MateraialSunBurst{
    id : string,
    parent: string,
    name: string ,
    value: number   
}

@Component({
  selector: 'app-materials-used-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials-used-summary.component.html',
  styleUrl: './materials-used-summary.component.scss'
})
export class MaterialsUsedSummaryComponent implements AfterViewInit , OnInit{
    
     
  public ngAfterViewInit(): void {
  }

  transposedData : any[] = []; 

  private toPascalCase(str: string): string {
      return str.replace(/\w+/g, (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  private transformData():  any{

    var material:any;
    var stateDict : Map<string, string>  = new Map();
    var conditionDict: Map<string, MateraialSunBurst>  = new Map();
    let identityNum  : number = 10000;

    this.transposedData.push(  {
        id: identityNum.toString(),
        parent: '',
        name: "Inventory"
    } );
    
    
    for (let i = 0; i < materialsReceived.length; i++)  {
        
         material = materialsReceived[i];
         let stateName = material.State?.toLowerCase();
         if(stateName == undefined)
            continue;
         if(stateDict.get(stateName) == undefined &&  stateName != undefined)
         {
            identityNum++;
            let stateObj =  {
                id: identityNum.toString(),
                parent: '10000',
                name: this.toPascalCase(stateName) ,
            }; 

            this.transposedData.push( stateObj );
            stateDict.set( stateName, identityNum.toString());
         }
     
         let conditionObj = conditionDict.get( stateName + "_" + material["Condition"]) ;
         if(conditionObj == undefined)
         {
            identityNum++;

            let value = Math.round( material["Total Amount"]  );
            value = value < 0 ? 1000 : value; 
           
            let obj = {
              id: identityNum.toString(),
              parent: (stateDict.get(stateName) as string),
              name: material["Condition"],
              value:  value
            } ;
              
            this.transposedData.push( obj);
            conditionDict.set( stateName + "_" + material["Condition"] , obj);
         }
         else{
            let value = Math.round( material["Total Amount"]  );
            value = value < 0 ? 1000 : value; 
            conditionObj.value += value  
         }

        //  if(materialDescDict.get(material["Condition"]) == undefined )
        //  {
        //     identityNum++;
        //     this.transposedData.push( {
        //         id: identityNum,
        //         parent:  receivedFromDict.get(material["Received From"]) as string,
        //         name: material["Material Description"],
        //         value: 1000
        //     } );

        //     materialDescDict.set( material["Material Description"], identityNum.toString());
        //  }
    }


  }

  ngOnInit(): void {
    this.transformData();
    this.createChartSunburst();
  }
  
  private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public createChartSunburst(): void {

    const data: any[] = this.transposedData;

    data.sort((a,b) => a.parent - b.parent);

    console.log(data);

    const chart = Highcharts.chart('chart-sunburst-mat-used', {
      chart: {
        height: '100%',
        backgroundColor: 'rgb(245, 245, 245)'
      },
      title: {
        text: 'Material Overview',
      },
      series: [{
        type: 'sunburst',
        data,
        name: 'Root',
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          allowOverlap:true,
          format: '{point.name}',
          "style":{
            "fontFamily":"Arial",
            "color":"#FFFFFF",
            "fontSize":10,
            "textOutline":0,
            "fontWeight": "normal"
            },
            "align":"center",
            "enabled":true,
          filter: {
            property: 'innerArcLength',
            operator: '>',
            value: -1,
          },
          rotationMode: 'circular',
        },
        levels: [{
          level: 1,
          levelIsConstant: false,
          dataLabels: {
            format: '{point.name} <br> INR {point.value:.2f}',
            filter: {
              property: 'outerArcLength',
              operator: '>',
              value: 0,
            },
          },
        }, {
          level: 2,
          dataLabels: {
            format: '{point.name}'
          },
          colorByPoint: true,
        }, {
          level: 3,
          colorVariation: {
            key: 'brightness',
            to: -0.5,
          },
        }, {
          level: 4,
          colorVariation: {
            key: 'brightness',
            to: 0.5,
          },
        }
    ],
      }],
      tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>  <BR> <BR>Total Cost : <b>INR {point.value:.2f}</b>',
      },
    } as any);
  }

 
}
