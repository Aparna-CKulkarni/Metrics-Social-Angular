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
        value: 'healthcare'
      }, 
      {
        name: 'Telecom',
        value: 'telecom'
      }, 
      {
        name: 'Media',
        value: 'media'
      }, 
      {
        name: 'BFSI',
        value: 'bfsi'
      }
    ]
  }

  navigatePage(path){
    this.router.navigate([path])
  }
}
