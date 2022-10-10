import { Component, OnInit } from '@angular/core';

export interface BiasElement {
  custId: string;
  custName: string;
  age: number;
  income: number;
  gender: string;
  metric1: string;
  metric2: string;
  metric3: string;
}

const customerBiasData: BiasElement[] = [
  {custId: '1', custName: 'Harry', age: 25, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '2', custName: 'Hedwig', age: 40, income: 20000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '3', custName: 'Voldemort', age: 35, income: 30000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '4', custName: 'Ron', age: 39, income: 40000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '5', custName: 'Hermoine', age: 26, income: 10000, gender:'F', metric1: '', metric2: '', metric3: ''},
  {custId: '6', custName: 'Snape', age: 28, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '7', custName: 'Sirius', age: 33, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '8', custName: 'Severus', age: 42, income: 10000, gender:'M', metric1: '', metric2: '', metric3: ''},
  {custId: '9', custName: 'Ginny', age: 61, income: 10000, gender:'F', metric1: '', metric2: '', metric3: ''},
  {custId: '10', custName: 'Hagrid', age: 58, income: 10000, gender:'F', metric1: '', metric2: '', metric3: ''},
];
@Component({
  selector: 'app-biases-view',
  templateUrl: './biases-view.component.html',
  styleUrls: ['./biases-view.component.scss']
})
export class BiasesViewComponent implements OnInit {
  displayedColumns: string[] = ['custId', 'custName', 'age', 'income', 'gender', 'metric1', 'metric2', 'metric3'];
  dataSource = customerBiasData;

  constructor() { }

  ngOnInit() {
  }

}
