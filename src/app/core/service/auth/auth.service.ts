import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:8080/api/v1/auth"
  private user: User | undefined

  localStorage: Storage | undefined;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.localStorage = this.document.defaultView?.localStorage
  }


  signIn(username: string, password: string) {
    this.http.post<User>(this.baseUrl + '/sign-in', {
      "userName": username,
      "password": password
    }).subscribe((res: { access_token: string, refresh_token: string, type: string } | any) => {

      if (res.access_token) {
        let access_token: string = res.access_token
        let refresh_token: string = res.refresh_token

        const decodedToken = this.getDecodedAccesstoken(res.access_token);

        const userName = decodedToken.username
        const userId = decodedToken.ID
        const roles = decodedToken.ROLES

        this.user = { access_token: access_token, refresh_token: refresh_token, id: userId, userName: userName, roles: roles }

        this.localStorage?.setItem('userInfo', JSON.stringify(this.user))

      }
    })
  }


  signOut() {
    this.localStorage?.clear()
  }

  signedIn(): boolean {
    const sessionInfo = this.localStorage?.getItem('userInfo')
    if (sessionInfo) {
      this.user = JSON.parse(sessionInfo!)
    }
    return this.user !== undefined
  }

  private getDecodedAccesstoken(accessToken: string): any {
    try {
      return jwtDecode(accessToken)
    }
    catch (Error) {
      console.log('error decoding access token', Error);
      return null
    }
  }

}
