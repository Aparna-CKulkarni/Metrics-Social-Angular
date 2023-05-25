import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiasesViewComponent } from './biases-view/biases-view.component';
import { ChooseIndustryComponent } from './choose-industry/choose-industry.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataSelectionComponent } from './data-selection/data-selection.component';
import { GenerateMetricsComponent } from './generate-metrics/generate-metrics.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OutputComponent } from './output/output.component';
import { SegmentViewComponent } from './segment-view/segment-view.component';
import { SelectMetricsComponent } from './select-metrics/select-metrics.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { GenerateGraphsComponent } from './generate-graphs/generate-graphs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/segment-view',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'segment-view',
    component: SegmentViewComponent
  },
  {
    path: 'customer-view',
    component: CustomerViewComponent
  },
  {
    path: 'biases-view',
    component: BiasesViewComponent
  },
  {
    path: 'upload-data',
    component: UploadDataComponent
  },
  {
    path: 'choose-industry',
    component: DataSelectionComponent
  },
  {
    path: 'select-metrics',
    component: SelectMetricsComponent
  },
  {
    path: 'generate-metrics',
    component: GenerateMetricsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'generate-metrics/show-results',
    component: OutputComponent
  },
  {
    path: 'generate-graphs',
    component: GenerateGraphsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
