import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { TimelineHeaderComponent } from './timeline-header/timeline-header.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineRoutingModule } from './timeline-routing.module';



@NgModule({
  declarations: [
    TimelinePageComponent,
    TimelineHeaderComponent,
    TimelineItemComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ]
})
export class TimelineModule { }
