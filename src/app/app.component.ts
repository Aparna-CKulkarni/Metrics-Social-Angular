import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface BiasElement {
  custId: string;
  custName: string;
  age: number;
  income: number;
  gender: string;
  metric1: string;
  metric2: string;
  metric3: string;
}

const customerBiasData: BiasElement[] = [
  {custId: '1', custName: 'Harry', age: 25, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '2', custName: 'Hedwig', age: 40, income: 20000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '3', custName: 'Voldemort', age: 35, income: 30000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '4', custName: 'Ron', age: 39, income: 40000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '5', custName: 'Hermoine', age: 26, income: 10000, gender:'F', metric1: '', metric2: '', metric3: ''},
  {custId: '6', custName: 'Snape', age: 28, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '7', custName: 'Sirius', age: 33, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '8', custName: 'Severus', age: 42, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '9', custName: 'Ginny', age: 61, income: 10000, gender:'F', metric1: '', metric2: '', metric3: ''},
  {custId: '10', custName: 'Hagrid', age: 58, income: 10000, gender:'F', metric1: '', metric2: '', metric3: ''},
];

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
      path: 'choose-industry',
      name: "Choose Industry"
    },
    {
      path: 'select-biases',
      name: "Select Biases"
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
  dataSource = customerBiasData;

  constructor(private router: Router){}
  
  // toggleSidenav(){
  //   this.sidenavFlag = !this.sidenavFlag;
  // }
}


