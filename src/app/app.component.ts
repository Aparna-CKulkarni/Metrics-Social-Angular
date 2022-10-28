import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Metrics-Social-Angular';
  loggedIn: boolean = false;
  sidenavFlag = true;
  sidenavLinks = [
    {
      path: 'menu',
      name: "Main Menu"
    },
    {
      path: 'segment-view',
      name: "Segment View"
    },
    {
      path: 'biases-view',
      name: "Biases View"
    },
    {
      path: 'customer-view',
      name: "Customer View"
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
      path: 'generate-metrics',
      name: "Generate Metrics"
    }
  ];

  displayedColumns: string[] = ['custId', 'custName', 'age', 'income', 'gender', 'metric1', 'metric2', 'metric3'];


  constructor(private router: Router) { }

  checkLoginDetails() {
    this.loggedIn = true;
  }

  // toggleSidenav(){
  //   this.sidenavFlag = !this.sidenavFlag;
  // }
}


