import { Component } from '@angular/core';
import data from './moj-report.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  selectedOperations: any;
  data: any;
  constructor() {
    this.data = data;
  }
}
