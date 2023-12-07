import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  template: '',
})
export class RedirectComponent implements OnInit {
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    public auth: AuthService,
    public afAuth: AngularFireAuth,

  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.firestore
          .collection('users')
          .doc(user?.uid)
          .valueChanges()
          .subscribe((data: any) => {
            if (data && data.ChannelName) {
              const channelName = data.ChannelName;
              const defaultIndex = data.SelectedIndex;
              this.router.navigate(['/display', channelName, defaultIndex]);
            }
          });
      }
    });
  }
}
