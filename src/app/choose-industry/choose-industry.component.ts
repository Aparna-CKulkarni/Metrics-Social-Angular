import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-industry',
  templateUrl: './choose-industry.component.html',
  styleUrls: ['./choose-industry.component.scss']
})
export class ChooseIndustryComponent implements OnInit {
  industryList;
  selectedIndustry;

  constructor(private router: Router) { }

  ngOnInit() {
    this.industryList =[
      {
        name: '',
        value: ''
      },
      {
        name: 'Advertising',
        value: 'advertising'
      },
      {
        name: 'Manufacturing',
        value: 'manufacturing'
      }, 
      {
        name: 'IT',
        value: 'it'
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

  navigatePage(){
    this.router.navigate([''])
  }
}
