import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-data-selection',
  templateUrl: './data-selection.component.html',
  styleUrls: ['./data-selection.component.scss']
})
export class DataSelectionComponent implements OnInit {
  socialMediaActivitiesList = [];
  locationList = [];
  noOfRepliesList = [];
  InterestList = [];

  constructor() { }

  ngOnInit() {
    this.socialMediaActivitiesList = [
      {
        name: 'Low',
        value: 'low'
      },
      {
        name: 'Medium',
        value: 'medium'
      },{
        name: 'High',
        value: 'high'
      }
    ];

    this.locationList = [
      {
        name: 'New York',
        value: 'newYork'
      },
      {
        name: 'California',
        value: 'california'
      },
      {
        name: 'Germany',
        value: 'germany'
      },
      {
        name: 'Paris',
        value: 'paris'
      }
    ];

    this.InterestList = [
      {
        name: 'Musical Interest',
        value: 'musical'
      },
      {
        name: 'Sports Enthusiast',
        value: 'sports'
      },   
      {
        name: 'Movie Buff',
        value: 'movies'
      },
      {
        name: 'Geek',
        value: 'geek'
      }
    ]
  }

}
