import { Component, OnInit } from '@angular/core';

export interface BiasElement {
  custId: string;
  custName: string;
  age: number;
  income: number;
  gender: string;
  anchoringBias: string;
  availabilityHeuristic: string;
  innovatorIndex: string;
}

const customerBiasData: BiasElement[] = [
  {custId: '1', custName: 'Harry', age: 25, income: 10000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '2', custName: 'Hedwig', age: 40, income: 20000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '3', custName: 'Voldemort', age: 35, income: 30000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '4', custName: 'Ron', age: 39, income: 40000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '5', custName: 'Hermoine', age: 26, income: 10000, gender:'F', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '6', custName: 'Snape', age: 28, income: 10000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '7', custName: 'Sirius', age: 33, income: 10000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '8', custName: 'Severus', age: 42, income: 10000, gender:'M', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '9', custName: 'Ginny', age: 61, income: 10000, gender:'F', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
  {custId: '10', custName: 'Hagrid', age: 58, income: 10000, gender:'F', anchoringBias: '', availabilityHeuristic: '', innovatorIndex: ''},
];

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  displayedColumns: string[] = ['custId', 'custName', 'age', 'income', 'gender', 'anchoringBias', 'availabilityHeuristic', 'innovatorIndex'];
  dataSource = customerBiasData;

  constructor() { }

  ngOnInit() {
  }

}
