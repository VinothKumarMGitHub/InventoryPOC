import { Component } from '@angular/core';
import { SplitterModule, DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommoncomponentsModule } from './common/components/commoncomponents.module';
import { HeaderComponent } from './common/components/header/header.component';
import { SlidermenuComponent } from './common/components/slidermenu/slidermenu.component';
import { WidgetsModule } from './widgets/widgets.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SplitterModule, DashboardLayoutModule, CommonModule, 
    RouterOutlet, 
    HeaderComponent,
    SlidermenuComponent,
    WidgetsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inventoryPOC';
}
