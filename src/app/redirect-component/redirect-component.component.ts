import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  template: '',
})
export class RedirectComponent implements OnInit {
  constructor(private router: Router, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore
      .collection('test') // Replace with your Firestore collection name
      .doc('v9dWU1YRCsIOISzKbbjH') // Replace with your Firestore document ID
      .valueChanges()
      .subscribe((data: any) => {
        if (data && data.ChannelName) {
          const channelName = data.ChannelName;
          const defaultIndex = data.SelectedIndex;
          this.router.navigate(['/display', channelName, defaultIndex]);
        }
      });
  }
}
