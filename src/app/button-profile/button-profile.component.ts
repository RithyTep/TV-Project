
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PHOTO_LIB } from '../dummy/data';
@Component({
  selector: 'app-button-profile',
  templateUrl: './button-profile.component.html',
  styleUrls: ['./button-profile.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(200)),
    ]),
  ],
})
export class ButtonProfileComponent implements OnInit {
  photoLib = PHOTO_LIB;

  constructor(
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    ) {

  }
  languages = [
    { key: 'kh', text: 'khmer', flag: 'assets/Logo/cambodia_flag_circle.png' },
    { key: 'en', text: 'english', flag: 'assets/Logo/english_flag_circle.png' },
    { key: 'cn', text: 'chinese', flag: 'assets/Logo/chinese_flag_circle.png' },
  ];
  ngOnInit() {
  }

  signOut() {
    this.auth.loginWithGoogle();
  }


  menuProfileHandle(item: any) {
    if (item === 'yt') {
      window.open('https://www.youtube.com/channel/UCGns_bl7d25rbBI8_BcX56Q', '_blank');
    } else if (item === 'fb') {
      window.open('https://web.facebook.com/Rithy500', '_blank');
    }
  }

  toggleAdditionalMenuItems(): void {
    this.auth.showAdditionalMenuItems =
      !this.auth.showAdditionalMenuItems;
  }

  closeTree(): void {
    this.auth.showAdditionalMenuItems = false;
  }
  
}
