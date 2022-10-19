import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressBarModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SegmentViewComponent } from './segment-view/segment-view.component';
import { BiasesViewComponent } from './biases-view/biases-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChooseIndustryComponent } from './choose-industry/choose-industry.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { SelectMetricsComponent } from './select-metrics/select-metrics.component';
import { GenerateMetricsComponent } from './generate-metrics/generate-metrics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
  
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SegmentViewComponent, BiasesViewComponent, CustomerViewComponent, DashboardComponent, ChooseIndustryComponent, SideBarComponent, UploadDataComponent, SelectMetricsComponent,
    GenerateMetricsComponent, MenuComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
