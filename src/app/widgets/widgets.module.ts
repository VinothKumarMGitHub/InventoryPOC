import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunburstComponent } from './sunburst/sunburst.component';
import { OngoingprojectsComponent } from './ongoingprojects/ongoingprojects.component';
import { ProgressSummaryComponent } from './progress-summary/progress-summary.component';
import { IdleinventoriesComponent } from './idleinventories/idleinventories.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { MaterialsUsedSummaryComponent } from './materials-used-summary/materials-used-summary.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SunburstComponent,
    OngoingprojectsComponent,
    ProgressSummaryComponent,
    IdleinventoriesComponent,
    SupervisorsComponent,
    MaterialsUsedSummaryComponent
  ],
  exports:[
    SunburstComponent,
    OngoingprojectsComponent,
    ProgressSummaryComponent,
    IdleinventoriesComponent,
    SupervisorsComponent,
    MaterialsUsedSummaryComponent
  ]
})
export class WidgetsModule { }
