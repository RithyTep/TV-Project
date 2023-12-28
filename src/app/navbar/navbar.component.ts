import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public auth: AuthService, public afAuth: AngularFireAuth, private breakpointObserver: BreakpointObserver) {}
  login() {
    this.auth.loginWithGoogle();
  }
  isMobileScreen: boolean = false;
  navbarWidth: string = 'calc(100vw - 233px)'; // Default width
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
      .subscribe(result => {
        this.isMobileScreen = result.matches;
        if (this.isMobileScreen) {
          this.navbarWidth = '100vw'; // Set width to 100vw when isMobileScreen is true
        } else {
          this.navbarWidth = 'calc(100vw - 233px)'; // Default width for non-mobile
        }
      });
  }
}
