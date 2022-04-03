import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import { UserData } from '../../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();

  constructor(
    private firebaseAuth: Auth
  ) { }

  login(loginData: UserData) {
    this.authChange.next(true);
    return signInWithEmailAndPassword(this.firebaseAuth, loginData.email, loginData.password);
  }

  signup(signupData: UserData) {
    return createUserWithEmailAndPassword(this.firebaseAuth, signupData.email, signupData.password);
  }

  logout() {
    this.authChange.next(false);
    return signOut(this.firebaseAuth);
  }

}
