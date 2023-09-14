import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  loginWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {
    return this.afAuth.signOut();
  }

  get loggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}
