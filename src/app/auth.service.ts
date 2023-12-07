import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data2: any;
  constructor(public afAuth: AngularFireAuth) {}

  userDataAuth: any;
  loginWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {
    this.userDataAuth = null;
    return this.afAuth.signOut();
  }

  get loggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}
