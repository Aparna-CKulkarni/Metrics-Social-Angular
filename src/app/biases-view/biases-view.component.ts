import { Component, OnInit } from '@angular/core';
import { Constants } from '../config/constants';
import { GenerateMetricsService } from '../services/generate-metrics/generate-metrics.service';

@Component({
  selector: 'app-biases-view',
  templateUrl: './biases-view.component.html',
  styleUrls: ['./biases-view.component.scss']
})
export class BiasesViewComponent implements OnInit {
  public anchoringScore = 0;
  constructor(private generateMetricsService: GenerateMetricsService,
    private constants: Constants) { }

  ngOnInit() {
    this.calculateAnchoringScore();
  }

  public calculateAnchoringScore(){
    let sum = 0;
    let count = 0;
    let avg;
    let url = this.constants.API_ENDPOINT + '/getCustomerData';
    this.generateMetricsService.getCSVData(url).subscribe(data => {
      data.forEach(row =>{
          sum = sum+row['anchoring'];
          count++;
      });
      avg = (sum/count).toFixed(4) ;
      this.anchoringScore = (avg*100);
    }, error => {
      console.log(error);
    });
  }

}
