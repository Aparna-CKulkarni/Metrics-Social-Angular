import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-industry',
  templateUrl: './choose-industry.component.html',
  styleUrls: ['./choose-industry.component.scss']
})
export class ChooseIndustryComponent implements OnInit {
  industryList;

  constructor() { }

  ngOnInit() {
    this.industryList =[
      {
        name: '',
        value: ''
      },
      {
        name: 'Advertising',
        value: ''
      },
      {
        name: 'Manufacturing',
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
