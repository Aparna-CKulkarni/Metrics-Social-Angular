import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sidenavFlag = true;
  sidenavLinks = [
    {
      path: 'segment-view',
      name: "Segment View"
    },
    {
      path: 'customer-view',
      name: "Customer View"
    },
    {
      path: 'biases-view',
      name: "Biases View"
    },
    {
      path: 'dashboard',
      name: "Dashboard"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
