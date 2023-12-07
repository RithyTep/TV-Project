import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobileScreen!: boolean;
  constructor(private breakpointObserver: BreakpointObserver){}
  items: string[] = ['Button 1', 'Button 2', 'Button 3'];

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      
      // this.isMobileScreen = result.matches;
      // if (this.isMobileScreen) {
      //   this.sidenav.close();
      // } else {
      //   this.sidenav.open();
      // }
    });
  }

  toggleSidenav() {
    if (this.isMobileScreen) {
      this.sidenav.toggle();
    }
  }
  logoSrc = 'assets/logo-02.gif';

  disableContextMenu(event: MouseEvent) {
    event.preventDefault();
  }
}
