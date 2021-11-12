import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineHeaderComponent } from './timeline-header/timeline-header.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineRoutingModule } from './timeline-routing.module';



@NgModule({
  declarations: [
    TimelineComponent,
    TimelineHeaderComponent,
    TimelineItemComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ]
})
export class TimelineModule { }
