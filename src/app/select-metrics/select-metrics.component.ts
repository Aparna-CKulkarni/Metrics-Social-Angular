import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-metrics',
  templateUrl: './select-metrics.component.html',
  styleUrls: ['./select-metrics.component.scss']
})
export class SelectMetricsComponent implements OnInit {
  metricsList;
  selectedIndustry;

  constructor() { }

  ngOnInit() {
    this.metricsList = [
      {
        name: '',
        value: ''
      },
      {
        name: 'Metrics',
        value: 'metrics'
      },
      {
        name: 'Anchor Bias',
        value: 'anchorBias'
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


