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

  constructor() {
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
    );
  }
  getCriminalLanguageKey(item: any, languageKey: string): string {
    const criminalLanguage = item?.criminal_language?.find(
      (lang: any) => lang.name_en.toLowerCase() === languageKey
    );
    return criminalLanguage?.name_en.toLowerCase() || '';
  }
  // getCriminalLanguageName(item: any, languageKey: string): string {
  //   const criminalLanguage = item?.criminal_language?.find(
  //     (lang: any) => lang.name_en.toLowerCase() === languageKey
  //   );
  //   return criminalLanguage?.name_en || '';
  // }
}
