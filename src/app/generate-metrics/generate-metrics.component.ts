import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { timer } from 'rxjs';
import { GenerateMetricsService } from '../services/generate-metrics/generate-metrics.service';
import { Constants } from '../config/constants';
import { AnchoringScore } from '../models/anchoring-score';
const minute = 1000 * 60;

@Component({
  selector: 'app-generate-metrics',
  templateUrl: './generate-metrics.component.html',
  styleUrls: ['./generate-metrics.component.scss']
})
export class GenerateMetricsComponent implements OnInit {
  public anchoringScoreData: AnchoringScore[];
  constructor(private spinner: NgxSpinnerService, private router: Router, private generateMetricsService: GenerateMetricsService, private constants: Constants) { }

  ngOnInit() {
  }

  generateMetrics(){
    this.spinner.show();
    let url = this.constants.API_ENDPOINT + '/import-csv';
    this.generateMetricsService.getCSVData(url).subscribe(data =>{
      console.log(data)
      this.spinner.hide()
      this.anchoringScoreData = data;
      this.router.navigate(['generate-metrics/show-results'])
    }, error =>{
      console.log(error);
    });
    // setTimeout(() => {
    //   this.spinner.hide();
      
    // }, 6000);
  } 
}
