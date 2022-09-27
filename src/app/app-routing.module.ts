import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiasesViewComponent } from './biases-view/biases-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SegmentViewComponent } from './segment-view/segment-view.component';

const routes: Routes = [
  {
    path: 'segment-view',
    component: SegmentViewComponent,
    outlet: "sidenav"
  },
  {
    path: 'customer-view',
    component: CustomerViewComponent,
    outlet: "sidenav"
  },
  {
    path: 'biases-view',
    component: BiasesViewComponent,
    outlet: "sidenav",
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    outlet: "sidenav"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
