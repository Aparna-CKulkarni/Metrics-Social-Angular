import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Metrics-Social-Angular';
  sidenavFlag = true;
  sidenavLinks = [
    {
      path: 'dashboard',
      name: "Main Menu"
    },
    {
      path: 'segment-view',
      name: "Segment View"
    },
    {
      path: 'biases-view',
      name: "Biases View"
    }, {
      path: 'customer-view',
      name: "Customer View"
    },
    {
      path: 'choose-industry',
      name: "Choose Industry"
    },
   
    {
      path: 'select-biases',
      name: "Select Biases"
    },
    
   
   
    {
      path: 'dashboard',
      name: "Dashboard"
    },
    {
      path: 'select-customer',
      name: "Select Customers"
    },
    {
      path: 'downloads',
      name: "Downloads"
      // children:[
      //   {path: }
      // ]
    },
    {
      path: 'upload-data',
      name: "Upload Data"
    },
    
    {
      path: 'select-metrics',
      name: "Select Metrics"
    },
    {
      path: 'generate-metrics',
      name: "Generate Metrics"
    },
    {
      path: 'selection-action',
      name: "Selection of Action"
    }
  ];

  displayedColumns: string[] = ['custId', 'custName', 'age', 'income', 'gender', 'metric1', 'metric2', 'metric3'];
  

  constructor(private router: Router){}
  
  // toggleSidenav(){
  //   this.sidenavFlag = !this.sidenavFlag;
  // }
}


