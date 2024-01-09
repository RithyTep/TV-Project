import { Component } from '@angular/core';
import data from './moj-report.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  data: any;
  combinedData: any[] = [];
  sum: any;
  totalAmountKhmer = 0;
  totalAmountEnglish = 0;
  totalAmountFrench = 0;
  constructor() {
    this.totalAmountKhmer = 0;
    this.totalAmountEnglish = 0;
    this.totalAmountFrench = 0;
    this.data = data;

    const d20 = this.data.filter((item: any) => item.urgent_obj?.key === 20);

    const d20Stu = d20.filter((item: any) => item?.isStudent);
    const d20nStu = d20.filter((item: any) => !item?.isStudent);
    const d20StuFor = d20Stu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );

    const lengthd20StuFor = d20StuFor.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd20StuFor = lengthd20StuFor.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );
    const d20StuKh = d20Stu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );
    const lengthd20StuKh = d20StuKh.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd20StuKh = lengthd20StuKh.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );

    const d20nStuFor = d20nStu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );

    const lengthd20nStuFor = d20nStuFor.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd20nStuFor = lengthd20nStuFor.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );
    const d20nStuKh = d20nStu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );
    const lengthd20nStuKh = d20nStuKh.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd20nStuKh = lengthd20nStuKh.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );

    //T00
    const d20StuForFr = d20StuFor.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d20StuFornFr = d20StuFor.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d20StuForFrEn = d20StuForFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20StuForFrnEn = d20StuForFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d20StuFornFrEn = d20StuFornFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20StuFornFrnEn = d20StuFornFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    //T01
    const d20StuKhFr = d20StuKh.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d20StuKhnFr = d20StuKh.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d20StuKhFrEn = d20StuKhFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20StuKhFrnEn = d20StuKhFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d20StuKhnFrEn = d20StuKhnFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20StuKhnFrnEn = d20StuKhnFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    // 20not

    const d20nStuForFr = d20nStuFor.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d20nStuFornFr = d20nStuFor.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d20nStuForFrEn = d20nStuForFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20nStuForFrnEn = d20nStuForFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d20nStuFornFrEn = d20nStuFornFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20nStuFornFrnEn = d20nStuFornFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    //T01
    const d20nStuKhFr = d20nStuKh.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d20nStuKhnFr = d20nStuKh.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d20nStuKhFrEn = d20nStuKhFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20nStuKhFrnEn = d20nStuKhFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d20nStuKhnFrEn = d20nStuKhnFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d20nStuKhnFrnEn = d20nStuKhnFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    // 12day
    const d12 = this.data.filter((item: any) => item.urgent_obj?.key === 12);

    const d12Stu = d12.filter((item: any) => item?.isStudent);
    const d12nStu = d12.filter((item: any) => !item?.isStudent);
    const d12StuFor = d12Stu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );

    const lengthd12StuFor = d12StuFor.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd12StuFor = lengthd12StuFor.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );
    const d12StuKh = d12Stu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );
    const lengthd12StuKh = d12StuKh.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd12StuKh = lengthd12StuKh.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );

    const d12nStuFor = d12nStu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );

    const lengthd12nStuFor = d12nStuFor.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd12nStuFor = lengthd12nStuFor.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );
    const d12nStuKh = d12nStu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );
    const lengthd12nStuKh = d12nStuKh.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );

    const amountd12nStuKh = lengthd12nStuKh.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + (currentValue || 0),
      0
    );

    //T00
    const d12StuForFr = d12StuFor.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d12StuFornFr = d12StuFor.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d12StuForFrEn = d12StuForFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12StuForFrnEn = d12StuForFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d12StuFornFrEn = d12StuFornFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12StuFornFrnEn = d12StuFornFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    //T01
    const d12StuKhFr = d12StuKh.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d12StuKhnFr = d12StuKh.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d12StuKhFrEn = d12StuKhFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12StuKhFrnEn = d12StuKhFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d12StuKhnFrEn = d12StuKhnFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12StuKhnFrnEn = d12StuKhnFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    // 20not

    const d12nStuForFr = d12nStuFor.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d12nStuFornFr = d12nStuFor.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d12nStuForFrEn = d12nStuForFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12nStuForFrnEn = d12nStuForFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d12nStuFornFrEn = d12nStuFornFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12nStuFornFrnEn = d12nStuFornFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    //T01
    const d12nStuKhFr = d12nStuKh.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const d12nStuKhnFr = d12nStuKh.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 2)
          ? true
          : false)
    );

    const d12nStuKhFrEn = d12nStuKhFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12nStuKhFrnEn = d12nStuKhFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );
    const d12nStuKhnFrEn = d12nStuKhnFr.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const d12nStuKhnFrnEn = d12nStuKhnFr.filter(
      (item: any) =>
        !(item?.criminal_language?.find((f: any) => f?.key === 3)
          ? true
          : false)
    );

    // For d20
    const d20ForEn = d20.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const lengthd20ForEn = d20ForEn.length;
    const amountd20ForEn = d20ForEn.reduce(
      (accumulator: any, item: any) =>
        accumulator +
        (item?.criminal_language?.find((f: any) => f?.key === 3)?.amount || 0),
      0
    );
    console.log('d20ForEn', lengthd20ForEn, amountd20ForEn);

    const d20ForFr = d20.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const lengthd20ForFr = d20ForFr.length;
    const amountd20ForFr = d20ForFr.reduce(
      (accumulator: any, item: any) =>
        accumulator +
        (item?.criminal_language?.find((f: any) => f?.key === 2)?.amount || 0),
      0
    );
    console.log('d20ForFr', lengthd20ForFr, amountd20ForFr);

    // For d12
    const d12ForEn = d12.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 3)
    );
    const lengthd12ForEn = d12ForEn.length;
    const amountd12ForEn = d12ForEn.reduce(
      (accumulator: any, item: any) =>
        accumulator +
        (item?.criminal_language?.find((f: any) => f?.key === 3)?.amount || 0),
      0
    );
    console.log('d12ForEn', lengthd12ForEn, amountd12ForEn);

    const d12ForFr = d12.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 2)
    );
    const lengthd12ForFr = d12ForFr.length;
    const amountd12ForFr = d12ForFr.reduce(
      (accumulator: any, item: any) =>
        accumulator +
        (item?.criminal_language?.find((f: any) => f?.key === 2)?.amount || 0),
      0
    );
    console.log('d12ForFr', lengthd12ForFr, amountd12ForFr);

    const totalLength =
      lengthd12ForFr + lengthd12ForEn + lengthd20ForFr + lengthd20ForEn;
    const totalAmount1 =
      amountd12ForFr + amountd12ForEn + amountd20ForFr + amountd20ForEn;

    console.log('Total length:', totalLength);
    console.log('Total amount:', totalAmount1);

    console.log('summary');
    console.log(
      '1,  length  amount  d12nStuKh:',
      lengthd12nStuKh.length,
      amountd12nStuKh
    );
    console.log(
      '2,  length  amount  d20nStuKh:',
      lengthd20nStuKh.length,
      amountd20nStuKh
    );
    console.log(
      '3,  length  amount  d20StuKh:',
      lengthd20StuKh.length,
      amountd20StuKh
    );
    console.log(
      '4,  length  amount  d12StuKh:',
      lengthd12StuKh.length,
      amountd12StuKh
    );
    console.log(
      '5,  length  amount  d12nStuKh:',
      lengthd12nStuFor.length,
      amountd12nStuFor
    );
    console.log(
      '6,  length  amount  d20nStuFor:',
      lengthd20nStuFor.length,
      amountd20nStuFor
    );
    console.log(
      '7,  length  amount  d20StuFor:',
      lengthd20StuFor.length,
      amountd20StuFor
    );
    console.log(
      '8,  length  amount  d12StuFor:',
      lengthd12StuFor.length,
      amountd12StuFor
    );

    console.log(
      'Total length:',
      lengthd20StuKh.length +
        lengthd20nStuKh.length +
        lengthd12StuKh.length +
        lengthd12nStuKh.length +
        lengthd20StuFor.length +
        lengthd20nStuFor.length +
        lengthd12StuFor.length +
        lengthd12nStuFor.length
    );
    const totalAmount =
      amountd20StuKh + amountd20nStuKh + amountd12StuKh + amountd12nStuKh;

    amountd20StuFor + amountd20nStuFor + amountd12StuFor + amountd12nStuFor;

    console.log('Total amount:', totalAmount);

    this.combinedData = this.combinedData.concat(
      // d20,
      //bug
      // d20Stu,
      // d20nStu, //bug duplicate.
      // d20nStuFor, //bus duplicate
      // d20nStuKh,
      // d20StuFor,
      // d20StuKh,

      // d20StuForFr,
      // d20StuFornFr,
      d20StuForFrEn,
      d20StuForFrnEn,
      d20StuFornFrEn,
      d20StuFornFrnEn,
      // d20StuKhFr,
      // d20StuKhnFr,
      d20StuKhFrEn,
      d20StuKhFrnEn,
      d20StuKhnFrEn,
      d20StuKhnFrnEn,

      // 20not

      d20nStuForFrEn,
      d20nStuForFrnEn,
      d20nStuFornFrEn,
      d20nStuFornFrnEn,

      // d20StuKhFr,
      // d20StuKhnFr,
      d20nStuKhFrEn,
      d20nStuKhFrnEn,
      d20nStuKhnFrEn,
      d20nStuKhnFrnEn,

      // day12
      d12StuForFrEn,
      d12StuForFrnEn,
      d12StuFornFrEn,
      d12StuFornFrnEn,

      // d12StuKhFr,
      // d12StuKhnFr,
      d12StuKhFrEn,
      d12StuKhFrnEn,
      d12StuKhnFrEn,
      d12StuKhnFrnEn,

      // 20not

      d12nStuForFrEn,
      d12nStuForFrnEn,
      d12nStuFornFrEn,
      d12nStuFornFrnEn,

      // d12StuKhFr,
      // d12StuKhnFr,
      d12nStuKhFrEn,
      d12nStuKhFrnEn,
      d12nStuKhnFrEn,
      d12nStuKhnFrnEn
    );
    this.combinedData.forEach((item: any) => {
      this.addToTotalAmount(
        'khmer',
        this.getCriminalLanguageAmount(item, 'khmer')
      );
      this.addToTotalAmount(
        'english',
        this.getCriminalLanguageAmount(item, 'english')
      );
      this.addToTotalAmount(
        'french',
        this.getCriminalLanguageAmount(item, 'french')
      );
    });
  }
  getCriminalLanguageKey(item: any, languageKey: string): string {
    const criminalLanguage = item?.criminal_language?.find(
      (lang: any) => lang.name_en.toLowerCase() === languageKey
    );
    return criminalLanguage?.name_en.toLowerCase() || '';
  }
  getCriminalLanguageAmount(item: any, languageKey: string): number {
    const criminalLanguage = item?.criminal_language?.find(
      (lang: any) => lang.name_en.toLowerCase() === languageKey
    );

    const amount = criminalLanguage?.amount || 0;

    return amount;
  }

  addToTotalAmount(languageKey: string, amount: number): void {
    switch (languageKey) {
      case 'khmer':
        this.totalAmountKhmer += amount;
        break;
      case 'english':
        this.totalAmountEnglish += amount;
        break;
      case 'french':
        this.totalAmountFrench += amount;
        break;
      default:
        break;
    }
  }
}
