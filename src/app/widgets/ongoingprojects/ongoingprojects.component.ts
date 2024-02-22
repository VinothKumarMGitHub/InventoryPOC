import { Component, ViewChild, OnInit } from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import indiaMap from '../../../assets/in-all.topo.json';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ongoingprojects',
  standalone: true,
  imports: [MatCardModule, HttpClientModule, HighchartsChartModule],
  templateUrl: './ongoingprojects.component.html',
  styleUrl: './ongoingprojects.component.scss'
})
export class OngoingprojectsComponent implements OnInit {
  @ViewChild('globalChart') globalChart = undefined;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  mapData: any;
  chartInstance: Highcharts.Chart | any;
  chartOptions: Highcharts.Options | any;
  point: any;
  //  public var fetchRes:any;
  constructor(private http: HttpClient) { }

  getChartInstance(e: Highcharts.Chart) {
    this.chartInstance = e;
    this.chartInstance.reflow();
  }
  ngOnInit() {

    // const topology = fetch(
    //   'https://code.highcharts.com/mapdata/custom/india.topo.json'
    // ).then(response => response.json());

    const data = [
      ['in-py', 10], ['in-ld', 11], ['in-wb', 12], ['in-or', 13],
      ['in-br', 14], ['in-sk', 15], ['in-ct', 16], ['in-tn', 17],
      ['in-mp', 18], ['in-2984', 19], ['in-ga', 20], ['in-nl', 21],
      ['in-mn', 22], ['in-ar', 23], ['in-mz', 24], ['in-tr', 25],
      ['in-3464', 26], ['in-dl', 27], ['in-hr', 28], ['in-ch', 29],
      ['in-hp', 30], ['in-jk', 31], ['in-kl', 32], ['in-ka', 33],
      ['in-dn', 34], ['in-mh', 35], ['in-as', 36], ['in-ap', 37],
      ['in-ml', 38], ['in-pb', 39], ['in-rj', 40], ['in-up', 41],
      ['in-ut', 42], ['in-jh', 43]
    ];

    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
      const R = 6371; // Earth's radius in kilometers
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return Math.round(distance * 100) / 100; // Round to two decimal places
    }

    // Function to convert degrees to radians
    function deg2rad(deg: number): number {
      return deg * (Math.PI / 180);
    }

    let mapDirection = [{
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [76.9558, 11.0168]
        ],
        distance:0
      },
      color: '#3030d0'
    },

    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [78.7047, 10.7905]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [78.1460, 11.6643]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [77.7567, 8.7139]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [77.7277, 11.3428]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [79.1325, 12.9165]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [79.9073, 13.1416]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [77.3411, 11.1075]
        ],
        distance:0
      },
      color: '#3030d0'
    },
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.2707, 13.0827],
          [78.1196, 9.9252]
        ],
        distance:0
      },
      color: '#3030d0'
    }
    ];

    mapDirection.forEach((item)=>{
        item.geometry.distance = calculateDistance(item.geometry.coordinates[0][0], item.geometry.coordinates[0][1], 
          item.geometry.coordinates[1][0], item.geometry.coordinates[1][1]); 
    });

    mapDirection.sort((p1,p2) => { return p1.geometry.distance - p2.geometry.distance; } )

    function lightenRGBColor(rgb: [number, number, number], amount: number): [number, number, number] {
      const [r, g, b] = rgb.map(component => Math.min(255, component + amount));
      return [r, g, b];
    }
    
    // Example usage:
    let originalColor: [number, number, number] = [50, 100,50]; // Original RGB color
    const amountToLighten = 10; // Amount to lighten the color by

    mapDirection.forEach((item)=>{
      const lightenedColor = lightenRGBColor(originalColor, amountToLighten)
      item.color = `rgb(${lightenedColor[0]}, ${lightenedColor[1]}, ${lightenedColor[2]})`
      originalColor = lightenedColor;
  });
    

    this.chartOptions = {
      chart: {
        map: indiaMap, // Use default India map
        //zoomType: "xy",
        height: '100%',
        backgroundColor: 'rgb(245, 245, 245)'
      },

      title: {
        text: 'Projects Locations Distance',
      },

      legend: {
        enabled: false,
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom',
        },
      },


      series: [{
        data: data,
        type: 'map',
        name: 'India',
        tooltip: {
          pointFormat: '{point.name}',
        },
      },
      {
        type: 'mapline',
        data: mapDirection,
        lineWidth: 4
      },
      {
        type: 'mappoint',
        data: [{
          "geometry": {
            "type": "Point",
            "coordinates": [80.2707, 13.0827]
          },
          "name": "Chennai"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [76.9558, 11.0168]
          },
          "name": "Coimbatore"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [78.7047, 10.7905]
          },
          "name": "Tiruchirappalli"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [78.1460, 11.6643]
          },
          "name": "Salem"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [77.7567, 8.7139]
          },
          "name": "Tirunelveli"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [77.7277, 11.3428]
          },
          "name": "Erode"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [79.1325, 12.9165]
          },
          "name": "Vellore"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [79.9073, 13.1416]
          },
          "name": "Tiruvallur"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [77.3411, 11.1075]
          },
          "name": "Tiruppur"
        },
        {
          "geometry": {
            "type": "Point",
            "coordinates": [78.1196, 9.9252]
          },
          "name": "Madurai"
        }],
        color: '#008000'
      }
      ],
    };


  }


}
