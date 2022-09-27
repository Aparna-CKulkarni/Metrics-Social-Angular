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

  constructor(private router: Router){}
  

  toPage(path){
    // this.router.navigateByUrl(path)
  }
  // toggleSidenav(){
  //   this.sidenavFlag = !this.sidenavFlag;
  // }
}


