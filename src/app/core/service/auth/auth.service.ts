import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private user: User | undefined

  localStorage: Storage | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = this.document.defaultView?.localStorage
  }


  public signIn() {
    this.user = {
      firstName: "test",
      lastName: "user",
      userName: "testUser",
      email: "user@test.com"
    }

    this.localStorage?.setItem('userInfo', JSON.stringify(this.user))

  }

  public signOut() {
    this.localStorage?.clear()
  }

  public signedIn(): boolean {
    const sessionInfo = this.localStorage?.getItem('userInfo')
    if (sessionInfo) {
      this.user = JSON.parse(sessionInfo!)
    }
    return this.user !== undefined
  }

}
