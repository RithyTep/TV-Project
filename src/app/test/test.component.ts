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
    const d20StuKh = d20Stu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );

    const d20nStuFor = d20nStu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );
    const d20nStuKh = d20nStu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );
    const lengthD20nStuKh = d20nStu.filter((item: any) =>
      item?.criminal_language?.find((f: any) => f?.key === 1)
    ).length;

    console.log('Length of d20nStuKh:', lengthD20nStuKh);

    const amountD20nStuKh = d20nStu.filter(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    ).length;

    console.log('Amount of d20nStuKh:', amountD20nStuKh);

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
    console.log('d20Stu:', d20Stu.length);
    console.log('d20nStu:', d20nStu.length);
    const d12 = this.data.filter((item: any) => item.urgent_obj?.key === 12);

    const d12Stu = d12.filter((item: any) => item?.isStudent);
    const d12nStu = d12.filter((item: any) => !item?.isStudent);
    console.log('d12Stu:', d12Stu.length);
    console.log('d12nStu:', d12nStu.length);

    const d12StuFor = d12Stu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );
    const d12StuKh = d12Stu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );

    const d12nStuFor = d12nStu.filter(
      (item: any) => item?.national_application?.key === 'foreigner'
    );
    const d12nStuKh = d12nStu.filter(
      (item: any) => item?.national_application?.key === 'khmer'
    );
    const amountd12nStuKh = d12nStuKh.map(
      (item: any) =>
        item?.criminal_language?.find((f: any) => f?.key === 1)?.amount
    );
    console.log('Sum of Amounts in d12nStuKh:', amountd12nStuKh);
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
