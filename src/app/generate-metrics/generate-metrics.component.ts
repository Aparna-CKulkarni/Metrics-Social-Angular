import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { timer } from 'rxjs';
const minute = 1000 * 60;

@Component({
  selector: 'app-generate-metrics',
  templateUrl: './generate-metrics.component.html',
  styleUrls: ['./generate-metrics.component.scss']
})
export class GenerateMetricsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
  }

  generateMetrics(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['generate-metrics/show-results'])
    }, 6000);
  } 
}
