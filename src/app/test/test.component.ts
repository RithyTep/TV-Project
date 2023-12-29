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
  D20T: any;
  D12T: any;
  foreignerArrayD20T: any;
  foreignerArrayD12T: any;

  constructor() {
    this.data = data;
    this.D20T = this.data
      .filter((item: any) => item.urgent_obj?.key === 20)
      .map((item: { national_application: { key: string } }) => ({
        ...item,
        national_application:
          item.national_application?.key === 'foreigner'
            ? item.national_application
            : null,
      }));

    this.D12T = this.data
      .filter((item: any) => item.urgent_obj?.key === 12)
      .map((item: { national_application: { key: string } }) => ({
        ...item,
        national_application:
          item.national_application?.key === 'foreigner'
            ? item.national_application
            : null,
      }));
  }
}
