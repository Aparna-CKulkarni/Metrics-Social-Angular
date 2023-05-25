import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-generate-graphs',
  templateUrl: './generate-graphs.component.html',
  styleUrls: ['./generate-graphs.component.scss']
})
export class GenerateGraphsComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
     this.spinner.show();
      setTimeout(() => {
      this.spinner.hide();
    }, 6000);
  }

}
