import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';

const routes: Routes = [
  {path: '', component: TimelinePageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
