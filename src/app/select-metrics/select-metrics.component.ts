import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-metrics',
  templateUrl: './select-metrics.component.html',
  styleUrls: ['./select-metrics.component.scss']
})
export class SelectMetricsComponent implements OnInit {
  metricsList;
  constructor() { }

  ngOnInit() {
    this.metricsList =[
      {
        name: '',
        value: ''
      },
      {
        name: 'Metrics',
        value: ''
      },
      {
        name: 'Anchor Bias',
        value: ''
      }, 
      {
        name: 'IT',
        value: ''
      }, 
      {
        name: ' Healthcare',
        value: ''
      }, 
      {
        name: 'Telecom',
        value: ''
      }, 
      {
        name: 'Media',
        value: ''
      }, 
      {
        name: 'BFSI',
        value: ''
      }, 
      {
        name: 'Advertising Industry',
        value: ''
      }, 
      {
        name: 'Advertising Industry',
        value: ''
      }, 
      {
        name: ' Industry',
        value: ''
      }, 
      {
        name: '',
        value: ''
      }
    ]
  }

  
  }


