import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenerateMetricsService } from '../services/generate-metrics/generate-metrics.service';
import { Constants } from '../config/constants';

export interface BiasElement {
  name: string;
  anchoringScore: string;
  depressionScore: string;
  PayersIndex: string;
}

// const customerBiasData: BiasElement[] = [
//   {name: 'admediaoffice', anchoringScore: '0.3911',  depressionScore: '0.8942', PayersIndex: '1.5285'},
//   {name: 'ahmirsf', anchoringScore: '0.2071',  depressionScore: '0.2261', PayersIndex: '0.0457'},
//   {name: 'akpamit87', anchoringScore: '0',  depressionScore: '0.6938', PayersIndex: '0.3471'},
//   {name: 'allaganlizard', anchoringScore: '0.1692',  depressionScore: '0.7472', PayersIndex: '0.3932'},
//   {name: 'annabellethedem', anchoringScore: '0.2706',  depressionScore: '0.8644', PayersIndex: '0.5002'},
//   {name: 'annafijalkowsk3', anchoringScore: '0.5019',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'aquisie', anchoringScore: '0.2177',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'dam007', anchoringScore: '0.3292',  depressionScore: '0.8280', PayersIndex: '0.4662'},
//   {name: 'autisticstfan', anchoringScore: '0.3788',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'awokebhakt', anchoringScore: '0.2737',  depressionScore: '0.3683', PayersIndex: '0.1135'},
//   {name: 'evgenij', anchoringScore: '0.2812',  depressionScore: '0.5514', PayersIndex: '0.2337'},
//   {name: 'booksteafilms', anchoringScore: '0.2698',  depressionScore: '0.4558', PayersIndex: '0.1669'},
//   {name: 'ne', anchoringScore: '0.2859',  depressionScore: '0.3095', PayersIndex: '0.0823'},
//   {name: 'briancatanella', anchoringScore: '0.1636',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'music', anchoringScore: '0.3041',  depressionScore: '0.6969', PayersIndex: '0.3498'},
//   {name: 'brooster101', anchoringScore: '0.2537',  depressionScore: '0.7248', PayersIndex: '0.3737'},
//   {name: 'sheep', anchoringScore: '0.3859',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'cdjcoulter', anchoringScore: '0.4535',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'hustle1', anchoringScore: '0.3635',  depressionScore: '0.4968', PayersIndex: '0.1945'},
//   {name: 'chuckneumeyer', anchoringScore: '0.1343',  depressionScore: '0.9076', PayersIndex: '0.5414'},
//   {name: 'conservawoman12', anchoringScore: '0.2622',  depressionScore: '1', PayersIndex: '0.6321'},
//   {name: 'creynol350', anchoringScore: '0',  depressionScore: '0.9107', PayersIndex: '0.5444'},
//   {name: 'davidcr50116487', anchoringScore: '0.4681',  depressionScore: '0.7911', PayersIndex: '0.4325'},
//   {name: 'delightfulrepas', anchoringScore: '0.2307',  depressionScore: '0.2834', PayersIndex: '0.0699'},
//   {name: 'derekwatson4', anchoringScore: '0.2025',  depressionScore: '0.2446', PayersIndex: '0.0531'},
//   {name: 'djmankad', anchoringScore: '0.3450',  depressionScore: '0.9313', PayersIndex: '0.5643'},
//   {name: 'dsummerss', anchoringScore: '0.2484',  depressionScore: '0.4706', PayersIndex: '0.1766'},
//   {name: 'dubhdonald', anchoringScore: '0',  depressionScore: '0.6483', PayersIndex: '0.3093'},
// ];

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  displayedColumns: string[] = ['name', 'anchoring', 'normalized', 'innovator', 'dealProne', 'nostalgia', 'digitalChannelAffinity', 'promoterWOM', 'immitation'];
  dataSource = [];

  constructor(private spinner: NgxSpinnerService, private generateMetricsService: GenerateMetricsService,
    private constants: Constants) { }

  ngOnInit() {
    this.getCustomerData();
  }

  public getCustomerData() {
    this.spinner.show();
    let url = this.constants.API_ENDPOINT + '/getCustomerData';
    this.generateMetricsService.getCSVData(url).subscribe(data => {
      this.spinner.hide()
      this.dataSource = data;
    }, error => {
      console.log(error);
    });
  }

}
