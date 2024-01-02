import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data2: any;
  showAdditionalMenuItems!: boolean;
  constructor(public afAuth: AngularFireAuth) {}
  isLoading: boolean = false;
  userDataAuth: any;
  loginWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {
    this.userDataAuth = null;
    return this.afAuth.signOut();
  }
}
