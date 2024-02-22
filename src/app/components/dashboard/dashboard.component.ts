import { Component } from '@angular/core';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { WidgetsModule } from '../../widgets/widgets.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardLayoutModule, WidgetsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public cellSpacing: number[] = [10, 10];
  public cellAspectRatio: number = 100/50;
  public panels: any = [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content:'<div class="content">0</div>' },
  { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content:'<div class="content">1</div>' },
  { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content:'<div class="content">2</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content:'<div class="content">3</div>' },
  { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content:'<div class="content">4</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content:'<div class="content">5</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content:'<div class="content">6</div>' }
  ];

}
