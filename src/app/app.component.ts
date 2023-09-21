import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoading = false;
    }, 1000);
  }
}